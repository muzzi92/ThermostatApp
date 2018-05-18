require 'sinatra'
require 'sinatra/base'
require './lib/ThermostatMemory'
require 'JSON'

class ThermostatApp < Sinatra::Base
  enable :sessions
  before do
    @thermostat = Thermostat.thermostat
  end

  get '/' do
    erb(:Thermostat)
  end

  get '/thermostat' do
    # headers 'Access-Control-Allow-Origin' => '*'
    {temperature: @thermostat.temperature, powersave: @thermostat.power_saving, city: @thermostat.city}.to_json
  end

  post '/thermostat' do
    @thermostat.temperature = params["temperature"] if params["temperature"]
    @thermostat.power_saving = params["powersave"] if params["powersave"]
    @thermostat.city = params["city"] if params["city"]
    p @thermostat
  end

end
