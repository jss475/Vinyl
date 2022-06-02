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
# 10.times do
#     Product.create(
#         name: Faker::Book.title,
#         price: rand(10..50),
#         quantity: rand(1..50),
#         description: Faker::Book.genre,
#         seller_id: Seller.ids.sample,
#         buyer_id: Buyer.ids.sample,
#         image: 'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg'
#     )
# end

# Made Big Bang
Product.create(
    name: "Made",
    price: rand(10..50),
    quantity: rand(1..50),
    description: "Made is the third Korean-language studio album by South Korean boy band Big Bang. Made was preceded by four single albums, each containing two singles each, all released in increments from May—August 2015. After over a year of delays, the full album was released on December 13, 2016. It marks the group's comeback after a three-year hiatus and their first full length Korean album since Remember (2008). The production of Made was primarily handled by G-Dragon along with long-time group collaborator Teddy Park. Musically, the album employs a variety of musical styles, integrating a range of genres from hip hop, EDM, pop rock, R&B, to trap.",
    seller_id: Seller.ids.sample,
    buyer_id: Buyer.ids.sample,
    image: 'https://upload.wikimedia.org/wikipedia/en/b/b2/BIGBANG_-_MADE.jpg'
)
#Twice Eyes Wide Open
Product.create(
    name: "Eyes Wide Open",
    price: rand(10..50),
    quantity: rand(1..50),
    description: "Eyes Wide Open is the second Korean studio album (fourth overall) by South Korean girl group Twice. It was released on October 26, 2020, by JYP Entertainment and Republic Records. It is the group's first Korean full-length album in nearly three years, following Twicetagram (2017). The group's sophomore album features thirteen songs including the lead single, 'I Can't Stop Me', and was released on the week of their fifth anniversary.Primarily a pop record with elements of retro-synth, dance-pop, Japanese city-pop, and contemporary R&B genres among others. Production of the album was handled by a wide array of producers including Melanie Fontana, Josh Record, LDN Noise, DJ Swivel, and Dua Lipa, with JYP Entertainment founder J. Y. Park serving as the album's executive producer. Members of the group participated in the production as songwriters for six out of thirteen tracks on the album. Lyrically, the album discusses themes of love, insomnia, self-confidence, self-encouragement, anxiety, and more.",
    seller_id: Seller.ids.sample,
    buyer_id: Buyer.ids.sample,
    image: 'https://kpopreviewed.files.wordpress.com/2020/12/twice-eyeswideopen-1.jpg'
)

#BTS Love Yourself:Answer
Product.create(
    name: "Love Yourself : Answer",
    price: rand(10..50),
    quantity: rand(1..50),
    description: "Love Yourself: Answer is the third Korean-language[A] compilation album by South Korean boy band BTS. The album was released on August 24, 2018, by Big Hit Entertainment and is available in four different versions: S, E, L, and F. The album contains twenty-five tracks (twenty-six for digital version), including seven new songs, with the track 'Idol' serving as the lead single. Most tracks are from Love Yourself: Her, and Love Yourself: Tear, including some remixes. The album debuted at number one in South Korea, Canada, Japan and the United States, becoming BTS' second chart-topping album in the US market.",
    seller_id: Seller.ids.sample,
    buyer_id: Buyer.ids.sample,
    image: 'https://ibighit.com/bts/images/bts/discography/love_yourself-answer/album-cover.jpg'
)

#Rainbow Kitten Surprise Seven + Mary
Product.create(        
    name: "Seven + Mary",
    price: rand(10..50),
    quantity: rand(1..50),
    description: "Featuring the hit 'Devil Like Me', Seven + Mary proves Rainbow Kitten Surprise is a legitimate and enjoyable band. Their expert lyricism and quality songwriting carry the album, even through its repetitive, predictable moments. At large, the project is beautiful, evoking deep contemplation and melancholy vibes. It is certainly a debut worth attention which promises even more for the future.",
    seller_id: Seller.ids.sample,
    buyer_id: Buyer.ids.sample,
    image: 'https://m.media-amazon.com/images/I/71kBnS2aKCL._SS500_.jpg'
)

#Red Velvet Perfect Velvet
Product.create(
    name: "Perfect Velvet",
    price: rand(10..50),
    quantity: rand(1..50),
    description: "Perfect Velvet is the second studio album by South Korean girl group Red Velvet. Released by SM Entertainment on November 17, 2017, the record incorporates R&B, soul and hip-hop with influences from future bass, trap and synth-pop, and saw contributions from various songwriters and production teams.The album is a portrayal of the group's 'velvet' concept, making it their second major release to follow this sonic direction since their second extended play, The Velvet (2016). The album reissued as The Perfect Red Velvet on January 29, 2018.",
    seller_id: Seller.ids.sample,
    buyer_id: Buyer.ids.sample,
    image: 'https://www.allkpop.com/upload/2020/10/content/211554/1603310096-red-velvet-the-2nd-album-perfect-velvet-rd-by-diyeah9tee4-dbu0fgv-fullview.jpg'
)

#Crush From Midnight to Sunrise
Product.create(
    name: "From Midnight to Sunrise",
    price: rand(10..50),
    quantity: rand(1..50),
    description: "Korean RnB golden child Crush is back with his first full-length album since 2014's Crush On You. Released on December 5th, From Midnight To Sunrise is composed of twelve tracks, delicately threaded together into one cohesive album telling a story of morning to night.",
    seller_id: Seller.ids.sample,
    buyer_id: Buyer.ids.sample,
    image: 'https://i.scdn.co/image/ab67616d0000b273cf642e17c057b94f2915c1b8'
)

#DEAN 130 Mood: TRBL
Product.create(
    name: "130 Mood: TRBL",
    price: rand(10..50),
    quantity: rand(1..50),
    description: "130 mood : TRBL is the debut extended play by South Korean singer Dean. It was released by Joombas and Universal Music Group on March 24, 2016.",
    seller_id: Seller.ids.sample,
    buyer_id: Buyer.ids.sample,
    image: 'https://m.media-amazon.com/images/I/71bNLaE7RYL._SL1200_.jpg'
)

#Girls Generation Oh
Product.create(
    name: "Oh",
    price: rand(10..50),
    quantity: rand(1..50),
    description: "Oh! is the second studio album by the South Korean girl group Girls' Generation. It was released on January 28, 2010 in Korea. It features the title track 'Oh!'. A repackaged version, Run Devil Run was released in March 2010, with new track 'Run Devil Run' as the title track. The album was listed by Gaon Albums Chart as the second best-selling release of 2010 in South Korea, with 197,934 copies sold, with the repackaged version at fourth with 136,851 copies.",
    seller_id: Seller.ids.sample,
    buyer_id: Buyer.ids.sample,
    image: 'https://www.crownnote.com/sites/default/files/Girls%27%20Generation%20-%20Oh%21.png'
)

#Kendirck Lamar DAMN
Product.create(
    name: "DAMN",
    price: rand(10..50),
    quantity: rand(1..50),
    description: "Damn (stylized as DAMN.) is the fourth studio album by American rapper Kendrick Lamar. It was released on April 14, 2017, through Top Dawg Entertainment, Aftermath Entertainment and Interscope Records. Lamar assembled numerous artists and producers to produce the album, including executive producer and Top Dawg Entertainment label-head Anthony 'Top Dawg' Tiffith, Sounwave, DJ Dahi, Mike Will Made It, and Ricci Riera, as well as further production contributions from James Blake, Steve Lacy, BadBadNotGood, Greg Kurstin, The Alchemist, and 9th Wonder, among others. The album features guest vocals from singers Rihanna and Top Dawg singer Zacari, along with Irish rock band U2.",
    seller_id: Seller.ids.sample,
    buyer_id: Buyer.ids.sample,
    image: 'https://media.pitchfork.com/photos/5929c3e8eb335119a49ed80f/1:1/w_600/31d2b6fd.jpg'
)

#Queen Night at the Opera
Product.create(
    name: "Night at the Opera",
    price: rand(10..50),
    quantity: rand(1..50),
    description: "A Night at the Opera is the fourth studio album by the British rock band Queen, released on 21 November 1975 by EMI Records in the United Kingdom and by Elektra Records in the United States. Produced by Roy Thomas Baker and Queen, it was reportedly the most expensive album ever recorded at the time of its release.",
    seller_id: Seller.ids.sample,
    buyer_id: Buyer.ids.sample,
    image: 'https://i.scdn.co/image/ab67616d0000b273a461aa96bd9a8fcd0a492aee'
)


puts "Done seeding products!"


puts "✅ Done seeding!"