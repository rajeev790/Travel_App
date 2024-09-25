-- Insert some initial users
INSERT INTO users (username, email, password) VALUES 
('john_doe', 'john@example.com', 'password123'),
('jane_smith', 'jane@example.com', 'password456');

-- Insert some hotels
INSERT INTO hotels (name, address, rating, price_per_night) VALUES
('Hotel Paradise', '123 Beach Road, Hawaii', 4.5, 150.00),
('City Central Hotel', '456 Main Street, New York', 4.2, 200.00);

-- Insert some restaurants
INSERT INTO restaurants (name, cuisine, rating, price_range) VALUES
('The Italian Place', 'Italian', 4.8, '$$$'),
('Sushi World', 'Japanese', 4.6, '$$');

-- Insert some tourist spots
INSERT INTO tourist_spots (name, location, description) VALUES
('Grand Canyon', 'Arizona, USA', 'A vast and majestic natural canyon.'),
('Eiffel Tower', 'Paris, France', 'A historic monument and symbol of France.');

-- Insert some bookings
INSERT INTO bookings (user_id, hotel_id, total_amount) VALUES
(1, 1, 300.00),
(2, 2, 400.00);
