DROP TABLE IF EXISTS mockData;

create table mockData (
	id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(50),
	lvl VARCHAR(50),
	isLiked1 VARCHAR(50),
	isLiked2 VARCHAR(50),
	isLiked3 VARCHAR(50)
);
insert into mockData (id, first_name, last_name, email, lvl, isLiked1, isLiked2, isLiked3) values (1, 'Dar', 'Arnley', 'darnley0@va.gov', 'medium', true, false, false);
insert into mockData (id, first_name, last_name, email, lvl, isLiked1, isLiked2, isLiked3) values (2, 'Marigold', 'Freebury', 'mfreebury1@tamu.edu','medium', true, false, false);
insert into mockData (id, first_name, last_name, email, lvl, isLiked1, isLiked2, isLiked3) values (3, 'Carce', 'Mingey', 'cmingey2@harvard.edu','medium', true, false, false);
insert into mockData (id, first_name, last_name, email, lvl, isLiked1, isLiked2, isLiked3) values (4, 'Bernadine', 'Claesens', 'bclaesens3@wufoo.com','medium', true, false, false);
insert into mockData (id, first_name, last_name, email, lvl, isLiked1, isLiked2, isLiked3) values (5, 'Trudey', 'Gouldstone', 'tgouldstone4@trellian.com','medium', true, false, false);
-- insert into mockData (id, first_name, last_name, email, lvl) values (6, 'Idalina', 'Joice', 'ijoice5@google.nl', 'high');
-- insert into mockData (id, first_name, last_name, email, lvl) values (7, 'Brunhilda', 'Decourcy', 'bdecourcy6@hugedomains.com', 'high');
-- insert into mockData (id, first_name, last_name, email, lvl) values (8, 'Milo', 'Arnal', 'marnal7@nifty.com','high');
-- insert into mockData (id, first_name, last_name, email, lvl) values (9, 'Zelda', 'Sergant', 'zsergant8@oakley.com','high');
-- insert into mockData (id, first_name, last_name, email, lvl) values (10, 'Elladine', 'Pervoe', 'epervoe9@illinois.edu','high');
