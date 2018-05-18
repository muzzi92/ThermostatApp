class User

  attr_reader :username

  @users = []

  def initialize(username)
    @username = username
  end

  def self.create(username)
    @users << User.new(username)
  end

  def self.user(username)
    @users.select { |user| user.username == username}.first
  end

end
