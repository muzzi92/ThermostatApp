require 'sinatra'
require 'sinatra/base'
require './lib/ThermostatMemory'
require './lib/user'
require 'JSON'


class ThermostatApp < Sinatra::Base
  enable :sessions

  get '/' do
    redirect '/sessions/new' unless session[:user_id]
    erb(:Thermostat)
  end

  get '/sessions/new' do
    erb(:login)
  end

  post '/sessions/new' do
    if User.user(params[:username])
       session[:user_id] = params[:username]
       session[:thermostat] = Thermostat.thermostat(params[:username])
       p session[:thermostat]
       p Thermostat.thermostats
       redirect '/'
     else
       redirect '/users/new'
     end
  end

  get '/users/new' do
    erb(:register)
  end

  post '/users/new' do
    p Thermostat.thermostats
    User.create(params[:username])
    Thermostat.create(params[:username])
    session[:user_id] = params[:username]
    session[:thermostat] = Thermostat.thermostat(params[:username])
    p Thermostat.thermostats
    redirect '/'
  end

  get '/thermostat' do
    {temperature: Thermostat.thermostat(session[:user_id]).temperature, powersave: Thermostat.thermostat(session[:user_id]).power_saving, city: Thermostat.thermostat(session[:user_id]).city}.to_json
  end

  post '/thermostat' do
    Thermostat.thermostat(session[:user_id]).temperature = params["temperature"] if params["temperature"]
    Thermostat.thermostat(session[:user_id]).power_saving = params["powersave"] if params["powersave"]
    Thermostat.thermostat(session[:user_id]).city = params["city"] if params["city"]
  end

end
