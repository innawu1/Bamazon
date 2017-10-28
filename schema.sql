DROP DATABASE IF EXISTS Bamazon;
CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products (
ItemID int NOT NULL AUTO_INCREMENT,
ProductName VARCHAR(255) NOT NULL,
DepartmentName VARCHAR(50) NOT NULL,
Price DECIMAL(5,2) NOT NULL,
StockQuantity INTEGER NOT NULL,
PRIMARY KEY (ItemID)
);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES(
"ASUS ROG Rapture GT-AC5300 Tri-band Gaming WIFI Router",
"Electronics",
388.98,
25 );

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES(
"Underhood of London Zip Up Hoodies for Men",
"Men's Clothing",
59.95,
100);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES(
"Cole Haan Loralie Bucket",
"Women's Clothing",
188.93,
50);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES(
"Spider-Man Homecoming",
"Movies & TV",
22.96,
70);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES(
"Persona 5",
"Video Games",
59.99,
35);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES(
"Keuring K55 Single Serve Programmable K-Cup Pod Coffee Maker",
"Home & Kitchen",
93.13,
20);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES(
"Full Life for Pets Roasted Turkey Slices",
"Pet Supplies",
16.88,
40);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES(
"Optimum Nutrition Gold Standard 100% Whey Protein Powder",
"Health and Personal Care",
55.09,
20);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES(
"The House By the River",
"Books",
4.99,
50);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES(
"CAP Barbell Enamel Coated Cast Iron Kettlebell",
"Sports & Fitness",
9.99,
100);
