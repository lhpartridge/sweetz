INSERT INTO category(category)
VALUES
('chocolate'),
('hard'),
('gummy'),
('other');

INSERT INTO brand(brand)
VALUES
("bassett's"),
("bonds"),
("cadbury's"),
("haribo"),
("lindt"),
("mars"),
("maynard's"),
("nestle"),
("rowntree's");

INSERT INTO product(name, brand_id, category_id, product_img, weight, description)
VALUES("maynard's bassett's jelly babies", 1, 3, "jelly_babies.jpg", 400, "Fruit flavored jelly babies. These delicious fruity flavored soft Jelly Babies are a true confectionary classic. Since 1918, these Jelly Babies have been loved by kids and adults alike. Made with real fruit juice, natural colors and flavors. This 400g carton is perfect as a gift and sharing with friends and family!");

INSERT INTO product(name, brand_id, category_id, product_img, weight, description)
VALUES
("quality street", 8, 1, "quality_street.jpg", 650, "With 12 iconic sweets to choose from in the classic quality street assortment, create more magic moments for you and your family."),
("fruit pastilles", 9, 3, "fruit_pastilles.jpg", 50, "Rowntree's Fruit Pastilles are a burst of juicy delight, offering a colourful array of chewy, sugar-coated candies packed with real fruit juice."),
("mint humbugs", 2, 2, "mint_humbugs.jpg", 200, "These delicious Bond's Mint Humbugs consist of a silky-smooth peppermint shell and a soft toffee hidden on the inside.");

