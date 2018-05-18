class Thermostat
  attr_accessor :temperature, :power_saving, :city

  def initialize(temp = 20, powersave = true, city = 'london')
    @temperature = temp
    @power_saving = powersave
    @city = city
  end

  def self.thermostat
    @thermostat ||= self.create
  end

  def self.create(temp = 25, powersave = true, city = 'london')
    @thermostat = self.new(temp, powersave, city)
  end

end
