# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Game.create(
  title: "Friday Night Modern",
  gametype: "Modern",
  time: "5pm",
  date: "10/21/17",
  address: "30 Claymoss Rd.",
  city: "Brighton",
  zip: "02135",
  number_of_players: "2",
)
