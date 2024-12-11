function refreshPage() {
    location.reload();
}

function searchHotels() {
    const hotelCardsContainer = document.getElementById('hotelCards');
    hotelCardsContainer.innerHTML = '';

    const hotels = [
        {
            name: 'Hotel Sunshine',
            location: 'Location 1',
            image: 'https://i.pinimg.com/736x/3a/74/dc/3a74dc16e393dbf95c174251fcc4f28d.jpg',
            facilities: ['Free Wi-Fi', 'Breakfast Included', 'Swimming Pool', 'Spa'],
            price: '$100/night',
            rating: '4.5/5'
        },
        {
            name: 'Ocean View Hotel',
            location: 'Location 2',
            image: 'https://via.placeholder.com/300x200',
            facilities: ['Free Wi-Fi', 'Beach Access', 'Gym', 'Restaurant'],
            price: '$200/night',
            rating: '4.8/5'
        },
        {
            name: 'Mountain Retreat',
            location: 'Location 3',
            image: 'https://via.placeholder.com/300x200',
            facilities: ['Free Wi-Fi', 'Mountain View', 'Hiking Trails', 'Sauna'],
            price: '$150/night',
            rating: '4.2/5'
        }
    ];

    hotels.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'hotel-card';
        card.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}">
            <h3>${hotel.name}</h3>
            <p>Location: ${hotel.location}</p>
            <p>Price: ${hotel.price}</p>
            <p>Rating: ${hotel.rating} <i class="fas fa-star"></i></p>
            <ul class="facilities">
                ${hotel.facilities.map(facility => `<li><i class="fas fa-check-circle"></i> ${facility}</li>`).join('')}
            </ul>
            <button class="book-now" data-hotel-name="${hotel.name}">Book Now <i class="fas fa-arrow-right"></i></button>
        `;
        hotelCardsContainer.appendChild(card);
    });

    // Add event listener to book now buttons
    const bookNowButtons = document.querySelectorAll('.book-now');
    bookNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const hotelName = button.getAttribute('data-hotel-name');
            // Redirect to payment page
            window.location.href = 'payment.html?hotel=' + hotelName;
        });
    });
}