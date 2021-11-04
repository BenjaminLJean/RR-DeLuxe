# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
Avatar.destroy_all
User.destroy_all


@admin = User.create!(username: 'Ben', email: 'ben@email.com', password: 'benben123')

puts "#{User.count} users created"

2.times do
  Avatar.create!(name: Faker::Name.name, rank: 'Runt', status: 'Alive', user: @admin)
end

puts "#{Avatar.count} avatars created"


Post.create!(name: @admin.username, content: 'This is simply a test to see if this works, hopefully it does.', user: @admin)

puts "#{Post.count} posts created"