# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  first_name: "Keith",
  last_name: "Hubert",
  email: "khubert@gmail.com",
  current_sign_in_ip: "209.249.19.173",
  username: "IPTest",
)
#
# Game.create(
#   title: "Commander! Beer!",
#   gametype: "Commander/EDH",
#   time: "8pm",
#   date: "10/28/17",
#   address: "25 Washington St.",
#   city: "Quincy",
#   zip: "02169",
#   number_of_players: "4",
# )
#
# Game.create(
#   title: "Competitive Modern, Swiss",
#   gametype: "Modern",
#   time: "630pm",
#   date: "10/27/17",
#   address: "145 Claymoss Rd.",
#   city: "Brighton",
#   zip: "02135",
#   number_of_players: "8",
# )
#
# Game.create(
#   title: "Standard Funtime",
#   gametype: "Modern",
#   time: "5pm",
#   date: "10/30/17",
#   address: "77 Summer St..",
#   city: "Boston",
#   zip: "02146",
#   number_of_players: "2",
# )
#
# Game.create(
#   title: "Casual EDH",
#   gametype: "Commander/EDH",
#   time: "5pm",
#   date: "10/7/17",
#   address: "12 Claymoss Rd.",
#   city: "Brighton",
#   zip: "02135",
#   number_of_players: "4",
# )
