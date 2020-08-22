use mealshare;
-- meal table
INSERT INTO meal VALUES(1, 'Aebleflæsk', ' ', 'Tåmrsgårdsvej,2020', '2020-08-31 12:20:00', 10, 75.00, '2020-08-11');
INSERT INTO meal VALUES(2, 'Krebinetter', ' ', 'Banegårdsvej,2620', '2020-08-30 12:20:00', 10, 85.00, '2020-08-11');
INSERT INTO meal VALUES(3, 'Hønsekødssuppe', ' ', 'Hvidovresvej,2605', '2020-08-29 12:20:00', 10, 95.00, '2020-08-11');
INSERT INTO meal VALUES(4, 'Frikadeller', ' ', 'Brøndbyvestersvej,2605', '2020-08-28 12:20:00', 10, 65.00, '2020-08-11');
INSERT INTO meal VALUES(5, 'Medisterpølse', ' ', 'Østbrovej,2010', '2020-08-27 12:20:00', 10, 45.00, '2020-08-11');
INSERT INTO meal VALUES(6, 'Flæskesteg', ' ', 'Hovedvejen,2120', '2020-08-26 12:20:00', 10, 55.00, '2020-08-11');
INSERT INTO meal VALUES(7, 'Mørbradbøffer', ' ', 'Tåmrsgårdsvej,2020', '2020-08-25 12:20:00', 10, 99.00, '2020-08-11');

-- reservation table
INSERT INTO reservation VALUES(1,4,'2020-08-12','71445566','Oley',6);
INSERT INTO reservation VALUES(2,5,'2020-08-13','23545566','Niels',5);
INSERT INTO reservation VALUES(3,7,'2020-08-12','41445675','Jhonnas',5);
INSERT INTO reservation VALUES(4,2,'2020-08-11','41445675','kristen',1);
INSERT INTO reservation VALUES(5,3,'2020-08-12','71445566','Thobias',2);
INSERT INTO reservation VALUES(6,2,'2020-08-15','71445566','Amelia',3);
INSERT INTO reservation VALUES(7,1,'2020-08-18','41445675','Barbara',7);
INSERT INTO reservation VALUES(8,5,'2020-08-17','71445566','Tina',4);
INSERT INTO reservation VALUES(9,2,'2020-08-14','41445675','Suman',2);
INSERT INTO reservation VALUES(10,3,'2020-08-12','71445566','Venkatesh',3);
INSERT INTO reservation VALUES(11,6,'2020-08-18','71445566','Raju',7);

-- review table
INSERT INTO review VALUES(1,'good','',4,'2020-08-15',1);
INSERT INTO review VALUES(2,'good','',5,'2020-08-16',4);
INSERT INTO review VALUES(3,'good','',5,'2020-08-15',7);
INSERT INTO review VALUES(4,'good','',4,'2020-08-18',3);


