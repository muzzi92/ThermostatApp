class Thermostat
  attr_accessor :temperature, :power_saving, :city

  @thermostats = {}

  def initialize(temp = 20, powersave = true, city = 'london')
    @temperature = temp
    @power_saving = powersave
    @city = city
  end

  def self.thermostat(username)
    @thermostats[username]
  end

  def self.create(username, temp = 20, powersave = true, city = 'london')
    @thermostats[username] = self.new(temp, powersave, city)
  end

  def self.thermostats
    @thermostats
  end 

end
