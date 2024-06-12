DROP DATABASE IF EXISTS sweetz_db;
CREATE DATABASE sweetz_db;
USE sweetz_db;

CREATE TABLE category(
    category_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL, 
    category ENUM("chocolate", "hard", "gummy") NOT NULl,
    CONSTRAINT pk_category PRIMARY KEY (category_id)
);

CREATE TABLE brand(
    brand_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    brand VARCHAR(40) LNOT NULL,
    CONSTRAINT pk_brand PRIMARY KEY (brand_id)
);

CREATE TABLE product(
    product_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    brand_id TINYINT UNSIGNED  NOT NULL,
    category_id TINYINT UNSIGNED NOT NULL,
    product_img VARCHAR(40),
    weight SMALLINT UNSIGNED,
    description TEXT,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_product_id PRIMARY KEY (product_id),
    CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES category (category_id)
);

CREATE TABLE product_to_category(
    product_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    category_id category_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES product (product_id),
    CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category (category_id)
);

CREATE TABLE product_to_brand(
    product_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    brand_id category_id TINYINT UNSIGNED AUTO_INCREMENT NOT NULL,
    CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES product (product_id),
    CONSTRAINT fk_brand FOREIGN KEY (brand_id) REFERENCES category (brand_id)
);