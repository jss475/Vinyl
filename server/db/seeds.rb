puts "🌱 Seeding buyers..."
3.times do 
    Buyer.create(
        name: Faker::Name.name,
        username: Faker::Internet.username(specifier: 5..8),
        password: Faker::Internet.password(min_length: 8)
    )
end
puts "Done seeding buyers!"

puts "🌱 Seeding sellers..."
3.times do 
    Seller.create(
        name: Faker::Name.name,
        balance: 0,
        username: Faker::Internet.username(specifier: 5..8),
        password: Faker::Internet.password(min_length: 8)
    )
end
puts "Done seeding sellers!"

puts "🌱 Seeding products..."
10.times do
    Product.create(
        name: Faker::Book.title,
        price: rand(10..50),
        quantity: rand(1..50),
        description: Faker::Book.genre,
        seller_id: Seller.ids.sample,
        buyer_id: Buyer.ids.sample,
        image: 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg'
    )
end
puts "Done seeding products!"


puts "✅ Done seeding!"