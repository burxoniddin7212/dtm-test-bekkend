INSERT INTO users(full_name,user_name,password,tell_number,region,gander) values ('ali aliyev','ali','12345','909787212','andijon','male'); 


insert into science (name) values ('Matematika'), ('Fizika'), ('Ingliz tili'), ('Kimyo'), ('Biologiya');


insert into institute (name) values ('Toshkent axborot texnologiyalari unversiteti'), ('Toshkent davlat texnika unversiteti'), ('Toshkent moliya instituti'), ('Toshkent tibbiyot akademyasi'), ('Toshkent milliy unversiteti'), ('Toshkent pediatriya tibbiyot instituti');



insert into faculty(name, grands, contracts, grand_mark, contract_mark, first_block, second_block, institute_id) values ('Axborot xavfsizligi', 20, 80, 168, 125.0, 1, 2, 1), ('Dasturiy injeniring', 35, 100, 137.6, 108.2, 1, 2, 1), ('Telekominakatsiya texnologiyalari', 65, 87, 142.8, 92.4, 1, 3, 1), ('Avtomobilsozlik va traktorsozlik', 7, 68, 118.7, 73.5, 1, 2, 2), ('Menejment', 5, 20, 156.5, 126.0, 1, 3, 2), ('Iqtisodiyot', 3, 10, 182.7, 158.6, 1, 3, 3), ('Davolash ishi', 23, 5, 164.9, 132.2, 4, 5, 4), ('Tibbiy profilaktika ishi', 12, 85, 142.8, 127.1, 4, 5, 4), ('Amaliy matematika', 14, 36, 165.9, 126.0, 1, 2, 5), ('Kimyo', 43, 132, 131.3, 78.8, 4, 5, 5), ('Menejment', 3, 27, 169.1, 134.4, 1, 3, 5), ('Biologiya', 24, 51, 133.4, 114.5, 4, 5, 5), ('Fizika', 50, 140, 156.5, 92.4, 1, 2, 5), ('Nintaqviy iqtisodiyot', 5, 25, 179.6, 159.6, 1, 3, 5), ('Davolash ishi', 10, 75, 162.8, 144.9, 4, 5, 6), ('Pediatriya ishi', 25, 175, 162.8, 140.7, 4, 5, 6);


TESTS  -  matematika



insert into tests(test_question, test_variants, test_answer, science_id) values 
('Quyidagi yig''indining ohirgi raqamini toping: 1!+2!+3!+…+25!', '{"3", "4", "5", "6"}', '3', 1), 
('x^3-36(x)^2-36x+63 ifodaning x=37 nuqtadagi qiymatini toping.', '{"0", "2768", "100", "63"}', '100', 1),
('|x-3| + |x+4| = 5 tenglama haqidagi mulohazalardan qaysi biri to''g''ri.', '{"Faqat bitta ildizi bor", "Ildizlari turli ishorali", "ildizi yo''q", "Har ikkala ildizi manfiy"}', 'ildizi yo''q', 1), 
('AOB markaziy burchak AB yoyga tiralgan ichki chizilgan burchagidan 30° ga ortiq. Ichki chizilgan burchak nimaga teng.', '{"30°", "40°", "20°", "50°"}', '30°', 1),
('Qaysi son katta. A=1*2*3...*20  mi B=1+2+3+…+1000000 mi', '{"A=B", "A>B", "A<B", "A^2=B"}', 'A>B', 1),
('Tenglamani yeching: 8(x+2)-6=7-(5-8x)', '{"-2", "0.5", "1.6", "ildizga ega emas"}', 'ildizga ega emas', 1),
('Ifodaning son qiymatini toping: S=2(ab+ac+bc) bunda:a=5,  b=6.4,  c=4.5', '{"50.45", "83.3", "166.6", "109"}', '166.6', 1),
('Teng yonli uchburchakning perimetri 48, yon tomoni 18 ga teng.Uning asosini toping?', '{"15", "12", "16", "18"}', '12', 1),
('Tenglamani eching: 1+7+13+19+…+X=280', '{"55", "33", "44", "66"}', '55', 1),
('Agar a+b+c=0 bo''lsa, a^3+b^3+c^3 ni qiymatini toping', '{"3abc", "3(a^2)bc", "3a(b^2)c", "3ab(c^2)"}', '3abc', 1);





TESTS  -  fizika

insert into tests (test_question, test_variants, test_answer, science_id) values 
('m massali jismning pastga tik a tezlanish bilan harakatlangan. Uning og''irligi qaysi ifodada to''g''ri keltirilgan?', '{"P=mg+ma", "P=mg ", "P=mg-ma", "F=ma"}', 'P=mg-ma', 2),
('Birinchi kosmik tezlik nimaga teng', '{"11.2km/s", "7.9km/s", "16.7km/s", "72.7km/s"}', '7.9km/s', 2),
('Prujina ustiga o''rnatilgan tayanchga 70g massali jism qo''yilgan. Muvozanat holatga jismning og''rligi nimaga teng bo''ladi? ', '{"0.7N", "70N", "7N", "700N"}', '700N', 2),
('Bola aravachani harakat yo''nalishida 35N kuch bilan itarib 50m masofaga olib bordi. Bunda bola qancha ishni bajargan?', '{"35J", "50J", "85J", "1750J"}', '1750J', 2),
('Matematik  mayatnik 20s ichida 40 marta tebranadi. Mayatnikning tebranich davrini toping.', '{"800s", "2s", "1s", "0.5s"}', '0.5s', 2),
('Moddiy nuqta 10 sekundda 25 marta tebrandi >Tebranish davri qanchaga teng.', '{"2s", "10s", "0.4", "0.5s"}', '0.4s', 2),
('Katta bo''lmagan tezliklarda suyuqlik bir-biriga nisbatan ko''chmasdan sirpanadigan qatlamlarga bo''linib oqadigan oqim qanday nomlanadi?', '{"Turbulent", "Uyurma", "Laminar", "Bo''ylama"}', 'Laminar', 2),
('20°C da havoda tovush tezligi qanchaga teng?', '{"3.34m/s", "334m/s", "33.4m/s", "343m/s"}', '343m/s', 2),
('Massasi 150g bo''lgan tosh 6m/s tezlik bilan gorizantal otildi. Otilish vaqtida toshning inpulsi qanch bo''lgan ?', '{"600kg m/s", "6kg m/s", "0.15kg m/s", "0.9kg m/s"}', '0.9kg m/s', 2),
('Oy Yerdan 384400km balandlikda orbita bo''ylab aylanmoqda. Yerga nisbatan oyning tezligini toping.', '{"7.9km/s", "5.2km/s", "3.6km/s", "1km/s"}', '1km/s', 2);


TESTS   -   ingilis tili 

insert into tests (test_question, test_variants, test_answer, science_id) values
('Our  homework______ very   difficult  yesterday,but  today  It _____easy.', '{"Was/is", "Were/is", "Will/like", " Was/was"}', 'Was/is', 3),
('The  weather____nice  today,  but  it  _____nasty  yesterday.', '{"Is/was", "Are/was", "Isn''t/were", "Was/was"}', 'Is/was', 3),
('Has   she  done  her  homework _____?', '{"Alredy", "Just", "yet", "At  the  moment"}', 'yet', 3),
('Ann ______to  be  an  artist.', '{"likeness", "would", "likes", "wants"}', 'wants', 3),
('We  got  up  late______Sunday  morning', '{"at", "on", "in", "inside"}', 'on', 3),
('I''ll  stay  here ... Monday', '{"of", "still", "till", "too"}', 'till', 3),
('_______to  a rock  concert?', '{"Have  you  ever  been", "Do  you  ever  go", "Had  you  saw", "Have  ever  go"}', 'Have  you  ever  been', 3),
('He  drives  too______', '{"fast", "faster", "fastest", "fastly"}', 'fastest', 3),
('How  many  children_____they____?', '{"Has/got", "Does/got", "Have/get", "Have/got"}', 'Have/got', 3),
('She  _____ travelled  to  most  parts  of  the  world.', '{"has", "does", "have", "did"}', 'has', 3);



TESTS   -   kimyo


insert into tests (test_question, test_variants, test_answer, science_id) values
('Avogadro doimiysini ifodalovchi sonni ko''rsating', '{"6.02*10^(-23)", "6.02*10^(23)", "6.02*10^(25)", "6.02*10^(20)"}', '6.02*10^(-23)', 4),
('Ham metallarga, ham metallmaslarga xos bo''lgan amfoter xossaga ega elementlar qatorini ko''rsating.', '{"rux va alyuminiy", "magniy va kaliy", "mis va xrom", "natriy va temir"}', 'rux va alyuminiy', 4),
('Asoslar suvda erish va erimasligiga qarab nechaga bo''linadi?', '{"6", "2", "4", "3"}', '2', 4),
('Oddiy moddani ko''rsaying?', '{"vodorod xlorid", "ammiak", "vodorod", "metan"}', 'vodorod', 4),
('Normal sharoitda 11,2 litr oltingugurt (IV)-oksid olish uchun qancha oltingugurtni yoqish kerak?', '{"64", "16", "32", "24"}', '16', 4),
('Kislota eritmasi quyidagi indikatorlarning qaysilari ta''sirida qizaradi? ', '{"Lakmus", "Lakmus va Metil zarg''aldog''i", "Lakmus va Fenoftalein", "Fenoftalein va Metil zarg''aldog''i"}', 'Lakmus va Metil zarg''aldog''i', 4),
('Yoritish  chiroqlarida  ishlatiladigan argon  izotoplarining   yadrolarida   nechta  prton  va  neytron  bor?', '{"6", "14", "18", "12"}', '18', 4),
('Quyidagi birikmalardan qaysi biri ion bog`lanishli birikma?', '{"F2", "HF", "KF", "HCOOH"}', 'HF', 4),
('Kuchsiz asos va kuchli kislotadan hosil bo''lgan tuzlarning suvdagi eritmasining muhiti qanday bo''ladi?', '{"Ishqoriy", "Asosli", "Neytral", "Kislotali"}', 'Kislotali', 4),
('8-guruhcha elementlari qanday nom bilan nomlanadi?', '{"Galogenlar", "Inert gazlar", "Lantanoidlar", "Ishqorlar"}', 'Inert gazlar', 4);


TESTS   -   biologiya  

insert into tests (test_question, test_variants, test_answer, science_id) values
('Biologiyani o`rganish usullari qaysilar?', '{"Eksperimental, ekologik", "Kuzatish, laboratoriya, nazariy", "Tarixiy, nazariy, eksperimental", "Kuzatish, tarixiy, eksperimental"}', 'Kuzatish, tarixiy, eksperimental', 5),
('Tirik organizmlarga xos belgilar qaysilar?', '{"Yemirilish, harakatlanish", "Harakatlanish, moddalar almashinuvi", "Ko`payish, ta`sirlanish", "Qo`zg`aluvchanlik, o`z-o`zini boshqarish, ko`payish"}', 'Qo`zg`aluvchanlik, o`z-o`zini boshqarish, ko`payish', 5),
('Qaysi kasalliklarda emlash yo`li bilan profilaktika olib boriladi?', '{"Radikulit, jigar kasalliklari", "Xolera, o`lat,ichburug`", "Ko`k yo`tal, qaqshal, defteriya", "Pneomaniya, gepatit"}', 'Ko`k yo`tal, qaqshal, defteriya', 5),
('Zamburug`lar vegetativ meva tanasini nima tashkil qiladi?', '{"Tallom", "Mitsiliy", "Sporafit", "Rizoid"}', 'Mitsiliy', 5),
('Hujayra massasining necha foizini makroelementlar tashkil qiladi?', '{"75%", "95%", "70%", "98%"}', '98%', 5),
('Suv hujayrada qanday ahamiyatga ega?', '{"Ichki muhit doimiyligini saqlaydi", "Hujayrada moddalar almashinuvi ta`minlaydi", "Erituvchu, H2 bog`lar hosil qiladi, Transport", "Aminokislotalar almashinuvini ta`minlaydi"}', 'Erituvchu, H2 bog`lar hosil qiladi, Transport', 5),
('Oqsillar qanday tarkibiy qismga ega?', '{"Aminokislotalar, radikal", "Radikal, aminoguruh", "Karboksil guruh, radikal", "Aminoguruh, karboksil guruh"}', 'Aminokislotalar, radikal', 5),
('Prokariotlarning hujayra qobig''i qanday moddadan tuzilgan?', '{"Murein", "Murein va Pektin", "Xitin", "Pektin"}', 'Murein va Pektin', 5),
('O`lat bakteriyalari qanday tarqaladi?', '{"Kemiruvchilarda yashovchi burgalar orqali", "Bitlar orqali", "Suv orqali", "Elimentar yo`llar bilan"}', 'Kemiruvchilarda yashovchi burgalar orqali', 5),
('O`simlik hujayrasining sitoplazmatik membranasiga nima deyiladi?', '{"Kapsula", "Sellyuloza", "Kutikula", "Xitin qobiq"}', 'Sellyuloza', 5);



INSERT INTO result(user_id,institute_id,faculty_id,first_block_ball,second_block_ball,result_user) values (7,1,1,'25','15','byudjet');


  user_id int REFERENCES users(user_id) not null,
  institute_id int REFERENCES institute(institute_id) not null,
  faculty_id int REFERENCES faculty(faculty_id) not null,
  first_block_ball varchar(5) not null,
  second_block_ball varchar(5) not null,
  result_user result_user_type not null,