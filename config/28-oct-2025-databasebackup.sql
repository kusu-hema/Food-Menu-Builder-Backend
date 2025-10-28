--
-- PostgreSQL database cluster dump
--

-- Started on 2025-10-28 16:43:54

\restrict LkunkzIWVeOIjkPdya7LXhUlAxXEgAhleLAk6qldzwOoUq2q3Vd6AaS9GNfaasM

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:EIrl41fl/GxErod08tHAdQ==$JeMfbHspIau8HmWbB2y+k4LDpJ6GqTtMGIb4MzFUorc=:el8EVuOACuRW+kkFDECUdOTI8mU61LlTVyxYOz4Mk/M=';

--
-- User Configurations
--








\unrestrict LkunkzIWVeOIjkPdya7LXhUlAxXEgAhleLAk6qldzwOoUq2q3Vd6AaS9GNfaasM

--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

\restrict Jg4eo4MqaF4C9ecTkKd0l1xJlDgyKkkBD34kY4tLZmjbrnkVahCtCwefTgajjR0

-- Dumped from database version 16.10
-- Dumped by pg_dump version 16.10

-- Started on 2025-10-28 16:43:54

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2025-10-28 16:43:54

--
-- PostgreSQL database dump complete
--

\unrestrict Jg4eo4MqaF4C9ecTkKd0l1xJlDgyKkkBD34kY4tLZmjbrnkVahCtCwefTgajjR0

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

\restrict QdRtAUeSY0PCDfeSTv7W21CR1tMhVag4zajy7yxsMMwUvb24pG7fvRyIbjE7Qqb

-- Dumped from database version 16.10
-- Dumped by pg_dump version 16.10

-- Started on 2025-10-28 16:43:54

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 5005 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 223 (class 1259 OID 24891)
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    sno integer,
    category_name character varying(150) NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 24890)
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categories_id_seq OWNER TO postgres;

--
-- TOC entry 5006 (class 0 OID 0)
-- Dependencies: 222
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- TOC entry 219 (class 1259 OID 16426)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    sno integer NOT NULL,
    image character varying(255),
    product character varying(255) NOT NULL,
    category character varying(255) NOT NULL,
    action character varying(50)
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16425)
-- Name: categories_sno_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_sno_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categories_sno_seq OWNER TO postgres;

--
-- TOC entry 5007 (class 0 OID 0)
-- Dependencies: 218
-- Name: categories_sno_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_sno_seq OWNED BY public.products.sno;


--
-- TOC entry 221 (class 1259 OID 16435)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    sno integer NOT NULL,
    category_name character varying(255) NOT NULL,
    image character varying(255)
);


ALTER TABLE public.category OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16434)
-- Name: category_sno_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_sno_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.category_sno_seq OWNER TO postgres;

--
-- TOC entry 5008 (class 0 OID 0)
-- Dependencies: 220
-- Name: category_sno_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_sno_seq OWNED BY public.category.sno;


--
-- TOC entry 217 (class 1259 OID 16399)
-- Name: customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customers (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    phone character varying(20),
    start date,
    end_date date,
    type character varying(50),
    location character varying(255),
    status character varying(50)
);


ALTER TABLE public.customers OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16398)
-- Name: customers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.customers_id_seq OWNER TO postgres;

--
-- TOC entry 5009 (class 0 OID 0)
-- Dependencies: 216
-- Name: customers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;


--
-- TOC entry 235 (class 1259 OID 24959)
-- Name: invoices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.invoices (
    id integer NOT NULL,
    menu_id integer,
    subtotal numeric(12,2) DEFAULT 0,
    gst numeric(12,2) DEFAULT 0,
    grand_total numeric(12,2) DEFAULT 0,
    advance numeric(12,2) DEFAULT 0,
    balance numeric(12,2) DEFAULT 0,
    lead_counters numeric(12,2) DEFAULT 0,
    water_bottles numeric(12,2) DEFAULT 0,
    cooking_charges numeric(12,2) DEFAULT 0,
    labour_charges numeric(12,2) DEFAULT 0,
    transport_charges numeric(12,2) DEFAULT 0,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.invoices OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 24958)
-- Name: invoices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.invoices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.invoices_id_seq OWNER TO postgres;

--
-- TOC entry 5010 (class 0 OID 0)
-- Dependencies: 234
-- Name: invoices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.invoices_id_seq OWNED BY public.invoices.id;


--
-- TOC entry 231 (class 1259 OID 24933)
-- Name: menu_categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menu_categories (
    id integer NOT NULL,
    context_id integer,
    category_name character varying(150) NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.menu_categories OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 24932)
-- Name: menu_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.menu_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.menu_categories_id_seq OWNER TO postgres;

--
-- TOC entry 5011 (class 0 OID 0)
-- Dependencies: 230
-- Name: menu_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.menu_categories_id_seq OWNED BY public.menu_categories.id;


--
-- TOC entry 229 (class 1259 OID 24920)
-- Name: menu_contexts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menu_contexts (
    id integer NOT NULL,
    menu_id integer,
    event_date date,
    meal character varying(50),
    members integer,
    buffet character varying(50),
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.menu_contexts OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 24919)
-- Name: menu_contexts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.menu_contexts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.menu_contexts_id_seq OWNER TO postgres;

--
-- TOC entry 5012 (class 0 OID 0)
-- Dependencies: 228
-- Name: menu_contexts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.menu_contexts_id_seq OWNED BY public.menu_contexts.id;


--
-- TOC entry 233 (class 1259 OID 24946)
-- Name: menu_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menu_items (
    id integer NOT NULL,
    category_id integer,
    item_name character varying(200) NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.menu_items OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 24945)
-- Name: menu_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.menu_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.menu_items_id_seq OWNER TO postgres;

--
-- TOC entry 5013 (class 0 OID 0)
-- Dependencies: 232
-- Name: menu_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.menu_items_id_seq OWNED BY public.menu_items.id;


--
-- TOC entry 227 (class 1259 OID 24912)
-- Name: menus; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.menus (
    id integer NOT NULL,
    customer_name character varying(200),
    contact character varying(30),
    place character varying(200),
    date date,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.menus OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 24911)
-- Name: menus_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.menus_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.menus_id_seq OWNER TO postgres;

--
-- TOC entry 5014 (class 0 OID 0)
-- Dependencies: 226
-- Name: menus_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.menus_id_seq OWNED BY public.menus.id;


--
-- TOC entry 225 (class 1259 OID 24899)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    id integer NOT NULL,
    category_id integer,
    product character varying(200) NOT NULL,
    image character varying(255),
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 24898)
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.product_id_seq OWNER TO postgres;

--
-- TOC entry 5015 (class 0 OID 0)
-- Dependencies: 224
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- TOC entry 4784 (class 2604 OID 24894)
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- TOC entry 4783 (class 2604 OID 16438)
-- Name: category sno; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN sno SET DEFAULT nextval('public.category_sno_seq'::regclass);


--
-- TOC entry 4781 (class 2604 OID 16402)
-- Name: customers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);


--
-- TOC entry 4796 (class 2604 OID 24962)
-- Name: invoices id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoices ALTER COLUMN id SET DEFAULT nextval('public.invoices_id_seq'::regclass);


--
-- TOC entry 4792 (class 2604 OID 24936)
-- Name: menu_categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_categories ALTER COLUMN id SET DEFAULT nextval('public.menu_categories_id_seq'::regclass);


--
-- TOC entry 4790 (class 2604 OID 24923)
-- Name: menu_contexts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_contexts ALTER COLUMN id SET DEFAULT nextval('public.menu_contexts_id_seq'::regclass);


--
-- TOC entry 4794 (class 2604 OID 24949)
-- Name: menu_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_items ALTER COLUMN id SET DEFAULT nextval('public.menu_items_id_seq'::regclass);


--
-- TOC entry 4788 (class 2604 OID 24915)
-- Name: menus id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menus ALTER COLUMN id SET DEFAULT nextval('public.menus_id_seq'::regclass);


--
-- TOC entry 4786 (class 2604 OID 24902)
-- Name: product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- TOC entry 4782 (class 2604 OID 16429)
-- Name: products sno; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN sno SET DEFAULT nextval('public.categories_sno_seq'::regclass);


--
-- TOC entry 4987 (class 0 OID 24891)
-- Dependencies: 223
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, sno, category_name, created_at) FROM stdin;
\.


--
-- TOC entry 4985 (class 0 OID 16435)
-- Dependencies: 221
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.category (sno, category_name, image) FROM stdin;
26	sample	uploads\\1760097752513-tq2.avif
1	Prasadam	uploads\\1760248956721-Prasadam.png
2	Breakfast	uploads\\1760248989398-BreakFast.png
3	Welcome Drinks	uploads\\1760249003183-welcome Drink.png
4	Welcome Snacks	uploads\\1760249080215-Welcome  Snack.png
5	Salads	uploads\\1760249093721-Salad.png
6	Roti	uploads\\1760249102648-Roti.png
7	Rice	uploads\\1760249131560-Rice.png
8	North Curries	uploads\\1760249140577-North Curries.png
9	South Curries	uploads\\1760249155976-South Curries.png
10	Dal & Liquids	uploads\\1760249170511-Dal & liquids.png
11	Pickles & Powders	uploads\\1760249182392-Pickles & powders.png
12	Sweets	uploads\\1760249203391-Sweet.png
13	Hot	uploads\\1760249216007-Hot.png
14	Chinese Counter	uploads\\1760249226479-Chinese Counter.png
15	Chat Counter	uploads\\1760249240775-Chat Counter.png
16	Fruit Stall	uploads\\1760249252455-Fruit Stall.png
17	Pan Counter	uploads\\1760249275166-Paan Counter.png
18	Dessert	uploads\\1760249287094-Dessert.png
19	Snacks	uploads\\1760249299422-Snacks.png
20	Tiffins	uploads\\1760249309886-Tiffins.png
21	Sarray	uploads\\1760249340351-Sweet.png
22	Common Items	uploads\\1760249357694-Common items.png
27	samples	uploads\\1761374061689-il_570xN.1347034385_drqc.webp
\.


--
-- TOC entry 4981 (class 0 OID 16399)
-- Dependencies: 217
-- Data for Name: customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customers (id, name, phone, start, end_date, type, location, status) FROM stdin;
1	Jane Smith	987-654-3210	2025-07-01	2026-07-01	Commercial	Los Angeles, USA	Inactive
2	Alice Johnson	555-123-4567	2025-05-15	2026-05-15	Residential	London, UK	Active
3	Robert Williams	444-987-6543	2025-06-20	2026-06-20	Residential	Sydney, Australia	Active
4	Maria Rodriguez	333-555-1234	2025-03-10	2026-03-10	Commercial	Tokyo, Japan	Active
5	James Brown	222-777-8888	2025-04-25	2026-04-25	Residential	Toronto, Canada	Pending
6	hema	123456789	2004-03-12	2004-03-12	tyfgbfgb	bbfgbfgb	ffgdfgdfg
7	Anusha	8989898989	2024-07-12	2024-07-12	Brithday 	vidya nagar	new
8	ashok kumar	888888888	2025-03-12	2025-05-13	Marriage	Kphp	new
9	Anusha	12345667890	2025-12-23	2025-12-24	fgdfgrg	gdgrgerg	new
10	Anusha	8499042581	2026-03-12	2026-03-15	Marriage	Nizamabad	new
11	Ramya	8342245896	2025-02-12	2025-02-13	Marriage 	Vidya Nagar	new
12	Hema	8342245896	2025-10-12	2025-10-12	Marriage	vidya nagar	new
\.


--
-- TOC entry 4999 (class 0 OID 24959)
-- Dependencies: 235
-- Data for Name: invoices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.invoices (id, menu_id, subtotal, gst, grand_total, advance, balance, lead_counters, water_bottles, cooking_charges, labour_charges, transport_charges, created_at) FROM stdin;
\.


--
-- TOC entry 4995 (class 0 OID 24933)
-- Dependencies: 231
-- Data for Name: menu_categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menu_categories (id, context_id, category_name, created_at) FROM stdin;
\.


--
-- TOC entry 4993 (class 0 OID 24920)
-- Dependencies: 229
-- Data for Name: menu_contexts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menu_contexts (id, menu_id, event_date, meal, members, buffet, created_at) FROM stdin;
1	\N	\N	\N	\N	\N	2025-10-26 14:51:48.053356
\.


--
-- TOC entry 4997 (class 0 OID 24946)
-- Dependencies: 233
-- Data for Name: menu_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menu_items (id, category_id, item_name, created_at) FROM stdin;
\.


--
-- TOC entry 4991 (class 0 OID 24912)
-- Dependencies: 227
-- Data for Name: menus; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.menus (id, customer_name, contact, place, date, created_at) FROM stdin;
1	Anusha	9248876781	Dilsukhnagar	2025-11-21	2025-10-24 12:46:07.604283
2	Ramesh	9876543210	Vidyanagar	2025-11-22	2025-10-24 12:46:07.604283
3	Kavya	9123456780	LB Nagar	2025-11-23	2025-10-24 12:46:07.604283
4	Anusha	9248876781	Dilsukhnagar	2025-11-21	2025-10-24 12:46:17.22272
5	Ramesh	9876543210	Vidyanagar	2025-11-22	2025-10-24 12:46:17.22272
6	Kavya	9123456780	LB Nagar	2025-11-23	2025-10-24 12:46:17.22272
7	Anusha	9248876781	Vidya Nagar	2025-11-21	2025-10-24 12:49:20.658675
8	\N	\N	\N	\N	2025-10-24 12:51:57.733551
9	hema	5678900344	vidyanagar	2025-10-25	2025-10-24 15:43:19.078442
10	hema sriiii	5678900344	vidyanagar	2025-10-25	2025-10-24 15:45:23.991213
11	Ramya	5678900344	vidyanagar	2025-10-25	2025-10-24 16:02:55.290425
12	Ramya	5678900344	vidyanagar	2025-10-25	2025-10-24 16:03:08.620796
13	Ramya	5678900344	vidyanagar	2025-10-25	2025-10-25 12:15:07.226263
14	Krishna Garu	5678900344	vidyanagar	2025-10-25	2025-10-25 12:16:15.283339
15	\N	\N	\N	\N	2025-10-25 12:32:01.341171
16	garu	7569182541	Nagole 	2025-10-02	2025-10-27 17:17:29.741093
17	Ganesh garu	9000016535	khp	2025-10-02	2025-10-27 17:33:26.213516
18	Ganesh garu	9000016535	khp	2025-10-02	2025-10-27 18:01:02.046991
19	hema garu	9876543210	ngri	2025-10-31	2025-10-27 18:10:57.147204
\.


--
-- TOC entry 4989 (class 0 OID 24899)
-- Dependencies: 225
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product (id, category_id, product, image, created_at) FROM stdin;
\.


--
-- TOC entry 4983 (class 0 OID 16426)
-- Dependencies: 219
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (sno, image, product, category, action) FROM stdin;
192	uploads\\1758972670266-Vankaya Allam Pachi Mirchi.png	Vankaya Allam Pachhi Mirchi	South Curries	null
11	uploads\\1758790873774-Black Current Milk Shake.png	Black Current Milk Shake	Welcome Drinks	null
319	uploads\\1759044649863-Butter Spl. Pav Bhaji.png	Butter Spl. Pav Bhaji	Chat Counter	null
360	uploads\\1760007960699-Ice Cream Roller.png	Ice Cream Roller	Dessert	null
362	uploads\\1760009422968-Steam Idly.png	Steam Idly	Tiffins	null
414	uploads\\1760074263319-Chakkalu.png	Chakilalu	Sarray	null
257	uploads\\1760075110419-Dabeli.png	Dhabeli	Chinese Counter	null
2	uploads\\1760593278981-1758791255598-Hot Badam Milk.png	Hot Badam Milk	Welcome Drinks	null
101	uploads\\1758793652827-Boiled Sprouts Salad.png	Boiled Sprouds Salad	Salads	null
12	uploads\\1758790916667-Tawa Hot Badam Milk In Pots.png	Tawa Hot Badam Milk In Pots	Welcome Drinks	null
13	uploads\\1758790933859-Guava Delight.png	Guava Delight	Welcome Drinks	null
14	uploads\\1758790947883-Litchi Coconut.png	Litchi Coconut	Welcome Drinks	null
15	uploads\\1758791009822-Mocktail Counter.png	Mocktail Counter	Welcome Drinks	null
16	uploads\\1758791520530-Veg Lollipop.png	Veg Lolly Pop	Welcome Snacks	null
17	uploads\\1758791531867-Gold Coin.png	Gold Coin	Welcome Snacks	null
18	uploads\\1758791542625-Veg. Manchuria.png	Veg. Manchuria	Welcome Snacks	null
19	uploads\\1758791554520-Dragon Roll.png	Dragon Roll	Welcome Snacks	null
20	uploads\\1758791568380-Veg. Bullet.png	Veg. Bullet	Welcome Snacks	null
21	uploads\\1758791585045-Dice Star Panneer.png	Dice Star Panneer	Welcome Snacks	null
22	uploads\\1758791597453-Babycorn Papad Hotgarlic Stick.png	Babycorn Papad Hotgarlic Stick	Welcome Snacks	null
23	uploads\\1758791609577-Golden Tikki.png	Golden Tikki	Welcome Snacks	null
24	uploads\\1758791622359-Cheese Balls.png	Cheese Balls	Welcome Snacks	null
25	uploads\\1758791636738-Capsicum Canopies.png	Capsicum Canopiece	Welcome Snacks	null
26	uploads\\1758791653865-Pudina Byte.png	Pudina Byte	Welcome Snacks	null
27	uploads\\1758791667736-Pista Delight.png	Pista Delight	Welcome Snacks	null
28	uploads\\1758791744157-Orange Peta.png	Orange Peta	Welcome Snacks	null
29	uploads\\1758791763066-Paneer Star.png	Paneer Star	Welcome Snacks	null
102	uploads\\1758793673420-Peanut Salad.png	Peanut Salad	Salads	null
103	uploads\\1758793689227-English Pepper Salad.png	English Pepper Salad	Salads	null
94	uploads\\1758793404026-Sprouts Salad.png	Sprouts Salad	Salads	null
96	uploads\\1758793444393-Pasta Salad.png	Pasta Salad	Salads	null
97	uploads\\1758793546460-Sweet Corn Salad.png	Sweet Corn Salad	Salads	null
98	uploads\\1758793596445-Sprout Fruit salad.png	Sprout Fruit Ball	Salads	null
99	uploads\\1758793615861-Alu Chenna Chat salad.png	Alu Chenna Chat	Salads	null
100	uploads\\1758793630646-Waldrof Salad.png	Waldrof Salad	Salads	null
104	uploads\\1758793704488-Mexican Salad.png	Mexican Salad	Salads	null
93	uploads\\1758793795701-Green Salad.png	Green Salad	Salads	null
105	uploads\\1758869171022-Poori.png	Poori	Roti	null
106	uploads\\1758869191432-Pulka.png	Pulka	Roti	null
107	uploads\\1758869207615-Chapathi.png	Chapathi	Roti	null
108	uploads\\1758869231295-Roomali Roti.png	Roomali Roti	Roti	null
109	uploads\\1758869309250-Tandoori Roti.png	Tandoori Roti	Roti	null
110	uploads\\1758869328041-Baby Naan.png	Baby Naan	Roti	null
111	uploads\\1758869411583-Latcha Parotha.png	Latcha Parota	Roti	null
128	uploads\\1758870437141-Vangi Bath.png	Vangi Bath	Rice	null
113	uploads\\1758869451139-Butter Naan.png	Butter Naan	Roti	null
114	uploads\\1758869471907-Masala Kulcha.png	Masala Kulcha	Roti	null
115	uploads\\1758869512757-Dry Fruit Naan.png	Dry Fruit Naan	Roti	null
116	uploads\\1758869548908-Makki Ka Roti.png	Makki Ka Roti	Roti	null
117	uploads\\1758869585052-Amritsari Naan.png	Amritsari Naan	Roti	null
118	uploads\\1758869624748-Palak Roomali.png	Palak Roomali Roti	Roti	null
119	uploads\\1758869660763-Tawa Pop Parotta.png	Tawa Pop Parota	Roti	null
120	uploads\\1758869701313-Pudina Paratha.png	Pudina Parota	Roti	null
121	uploads\\1758869728834-Stuffed Panneer Kulcha.png	Stuffed Panneer Kulcha	Roti	null
122	uploads\\1758869754615-Bajra Roti.png	Banjara Roti	Roti	null
123	uploads\\1758869785561-Delhi Naan.png	Delhi Naan	Roti	null
125	uploads\\1758870351949-Zeera Rice.png	Zeera Rice	Rice	null
126	uploads\\1758870379815-Bagara Rice.png	Bagara Rice	Rice	null
127	uploads\\1758870412336-Coconut Rice.png	Coconut Rice	Rice	null
129	uploads\\1758870475981-Karivepaku Rice.png	Karvepaku Rice	Rice	null
130	uploads\\1758870793712-Gongura Rice.png	Gongura Rice	Rice	null
131	uploads\\1758870895818-Paneer Biryani.png	Panee Biryani	Rice	null
132	uploads\\1758870923974-Jackfruit Biryani.png	Jackfruit Biryani	Rice	null
133	uploads\\1758870949754-Veg. Fried Rice.png	Veg. Fried Rice	Rice	null
135	uploads\\1758871050826-Veg. Dhum Ka Biryani.png	Veg. Dhum Ka Biryani	Rice	null
124	uploads\\1758871029868-Pulihora.png	Pulihora	Rice	null
136	uploads\\1758871068770-Veg. Palov.png	Veg. Palov	Rice	null
137	uploads\\1758871112294-Curd Rice.png	Curd Rice	Rice	null
138	uploads\\1758871154159-Bisbilla Bath.png	Bisbilla Bath	Rice	null
139	uploads\\1758871174998-Daddojanam.png	Daddojanam	Rice	null
140	uploads\\1758871205636-Kaju Peas Palov.png	Kaju Peas Palov	Rice	null
141	uploads\\1758871234549-Handi Veg  Biryani.png	Hundi Biryani	Rice	null
406	uploads\\1758538926515-Paramannam.jpg	Paramannam	Prasadam	null
142	uploads\\1758871263986-Kaju Palov.png	Kaju Palov	Rice	null
230	uploads\\1758871634836-Minapa Wada.png	Minapa Wada	Hot	null
235	uploads\\1758871900999-Mirchi Bajji.png	Mirchi Bajji	Hot	null
240	uploads\\1758871968888-Capsicum Rings.png	Capsicum Rings	Hot	null
144	uploads\\1758969203415-Chole Masala.png	Chole Masala	North Curries	null
146	uploads\\1758969235610-Capsicum Masala.png	Capsicum Masala	North Curries	null
148	uploads\\1758969289643-Veg. Jalfrezi.png	Veg. Jal Frize	North Curries	null
150	uploads\\1758969325323-Alu Fry.png	Alu Fry	North Curries	null
152	uploads\\1758969388563-Donda Fry.png	Donda Fry	North Curries	null
154	uploads\\1758969451418-Baby Corn Chatpata (2).png	Babycorn Chat Pat	North Curries	null
158	uploads\\1758969567947-Paneer Chatpata.png	Panneer Chatpat	North Curries	null
161	uploads\\1758969764643-Mix Veg. Kurma.png	Mix Veg. Kurma	North Curries	null
164	uploads\\1758969916419-Kala Jamun Curry.png	Mini Jamun Curry	North Curries	null
168	uploads\\1758970000530-Sarsonki Saag.png	Sarsonki Saag	North Curries	null
172	uploads\\1758970125906-Khurchan Paneer.png	Khurchan Paneer	North Curries	null
176	uploads\\1758970317634-Baby Corn Do Pyaza.png	Baby Corn Do Pyaza	North Curries	null
180	uploads\\1758972216854-Dondakaya Karam.png	Dondakaya Karam	South Curries	null
184	uploads\\1758972314467-Avial.png	Avial	South Curries	null
190	uploads\\1758972618203-Kosambari.png	Kosambari	South Curries	null
194	uploads\\1758972721163-Alu Tomato Curry.png	Alu Tomato Curry	South Curries	null
196	uploads\\1758972756962-Alu Curry.png	Alu Curry	South Curries	null
198	uploads\\1758972805418-Gutti Vankaya.png	Gutti Vankaya	South Curries	null
202	uploads\\1758973510069-Tomato Pappu.png	Tomato Pappu	Dal & Liquids	null
206	uploads\\1758973606591-Mudda Pappu.png	Mudda Pappu	Dal & Liquids	null
210	uploads\\1758973732192-Rasam.png	Rasam	Dal & Liquids	null
297	uploads\\1759043958505-Alu Tokiri.png	Alu Tokiri	Chat Counter	null
302	uploads\\1759044151146-Karela Papidi.png	Karela Papidi	Chat Counter	null
310	uploads\\1759044367483-Hara Bara Katori.png	Hara Bara Katori	Chat Counter	null
318	uploads\\1759044629416-Chat Patak Kesar.png	Chat Patak Kesar	Chat Counter	null
326	uploads\\1759045382516-Fruit Stall.png	Fruit Stall	Fruit Stall	null
327	uploads\\1759045403588-Indian Fruits.png	Indian Fruits	Fruit Stall	null
335	uploads\\1760005531842-Fruit Salad With Custard.png	Fruit Salad	Dessert	null
344	uploads\\1760007841350-Pista With Topping.png	Pista With Topping	Dessert	null
353	uploads\\1760008047986-Dry Fruit Nuts.png	Dry Fruit Nuts	Dessert	null
363	uploads\\1760009431263-Appam.png	Appam	Tiffins	null
365	uploads\\1760009452305-Poori with alu curry.png	Poori With Alu Curry	Tiffins	null
421	uploads\\1760011973131-Papad.png	Papad	Common Items	null
430	uploads\\1760012178886-Palli Chutney.png	White Chutney	Common Items	null
417	uploads\\1760074295645-Mixture.png	Mixture	Sarray	null
419	uploads\\1760074327278-Chalimidi.png	Chalimidi	Sarray	null
245	uploads\\1760074777235-238.png	Corn. Veg. Fried Rice	Chinese Counter	null
250	uploads\\1760074894018-Hot Garlic Sauce.png	Hot Garlic Sauce	Chinese Counter	null
255	uploads\\1760075058315-Paneer Tikka.png	Panneer Tikka	Chinese Counter	null
259	uploads\\1760075160732-Mexican Roll.png	Mexican Roll	Chinese Counter	null
260	uploads\\1760075201154-Rolly Polly Roll.png	Rolly Polly Roll	Chinese Counter	null
267	uploads\\1760075374674-Paneer Sukuti.png	Paneer Sukuti	Chinese Counter	null
274	uploads\\1760075969105-Dice Star Manchuria.png	Dice Star Manchuria	Chinese Counter	null
278	uploads\\1760076070266-Hot Panneer Dil.png	Hot Panneer Dil	Chinese Counter	null
281	uploads\\1760076191393-Grill Sandwich.png	Grill Sandwich	Chinese Counter	null
289	uploads\\1760076522704-Tandoori Alu.png	Tandoori Alu	Chinese Counter	null
215	uploads\\1760076871219-Gongura Pickle.png	Gongura Pickle	Pickles & Powders	null
220	uploads\\1760076957540-Cobbari Pachadi.png	Cobbari Pachadi	Pickles & Powders	null
223	uploads\\1760077001764-Dosakaya Pachadi.png	Dosakaya Pachadi	Pickles & Powders	null
376	uploads\\1760077491226-Mixture.png	Mixture	Snacks	null
386	uploads\\1760077634218-Pav Bhaji.png	Pav Bhaji	Snacks	null
387	uploads\\1760077645906-Bhel Puri.png	Bhel Puri	Snacks	null
396	uploads\\1760079493168-Mysore Bajji.png	Mysore Bajji	Breakfast	null
191	uploads\\1758972644723-Capsicum Karam.png	Capsicum Karam	South Curries	null
193	uploads\\1758972702580-Jeera Aloo.png	Zeera Alu	South Curries	null
195	uploads\\1758972741097-Aratikaya Upma Curry.png	Aratikaya Upma Curry	South Curries	null
197	uploads\\1758972784474-Mulakkada Tomato.png	Mulakada Tomatoo	South Curries	null
200	uploads\\1758973019659-Gutti Vankaya.png	Gutti Vankaya (White)	South Curries	null
203	uploads\\1758973535837-Palakura Pappu.png	Palakura Pappu	Dal & Liquids	null
204	uploads\\1758973559398-Dosakaya Pappu.png	Dosakaya Pappu	Dal & Liquids	null
207	uploads\\1758973633086-Mukkala Pulusu.png	Mukkala Pulusu	Dal & Liquids	null
208	uploads\\1758973666691-Sambar.png	Sambar	Dal & Liquids	null
211	uploads\\1758973756639-Gongura Pappu.png	Gongura Pappu	Dal & Liquids	null
213	uploads\\1758973798739-Ulavacharu With Cream.png	Ulva Charu With Cream	Dal & Liquids	null
294	uploads\\1759043895211-Ragada Cutlet.png	Ragada Cutlet	Chat Counter	null
295	uploads\\1759043917297-Bhel Puri.png	Bhel Puri	Chat Counter	null
243	uploads\\1760074731581-Veg. Manchuria.png	Veg. Manchuria	Chinese Counter	null
246	uploads\\1760074809556-Veg. Shanghai Roll.png	Veg. Palak Sprink Roll	Chinese Counter	null
248	uploads\\1760074866806-Spanish Manchurian.png	Spanish Manchuria	Chinese Counter	null
251	uploads\\1760074916522-Veg. Shanghai Roll.png	Veg. Shangai Roll	Chinese Counter	null
253	uploads\\1760074950171-Chinese Bhel.png	Chinese Bhel	Chinese Counter	null
256	uploads\\1760075074995-Coriandal Butter Garlic Noodles.png	Coriandal Butter Garlic Noodles	Chinese Counter	null
258	uploads\\1760075125555-Pepper Manchurian.png	Pepper Manchuria	Chinese Counter	null
261	uploads\\1760075218827-Italian Pasta With White.png	Italian Pasta With White	Chinese Counter	null
264	uploads\\1760075310066-Paneer Barbeque.png	Panneer Barby Q	Chinese Counter	null
266	uploads\\1760075349931-Veg. Canopies.png	Veg. Canopies	Chinese Counter	null
254	\N	Veg. Bamboo Rice	Chinese Counter	\N
268	uploads\\1760075402466-Malaysian Peanut Cutlet.png	Malasian Peanut Cutlet	Chinese Counter	null
262	\N	Corn Saslic Rice	Chinese Counter	\N
273	\N	Seven Jewel Rice	Chinese Counter	\N
276	\N	All Veg Hoch Poch	Chinese Counter	\N
282	\N	Thai Rice With Red Curry	Chinese Counter	\N
283	\N	Italian Pasta With Red Sauce	Chinese Counter	\N
287	\N	Pudina Byte	Chinese Counter	\N
288	\N	Malai Paneer Tikka	Chinese Counter	\N
291	\N	Green Tikka	Chinese Counter	\N
292	\N	Gobi Tikka	Chinese Counter	\N
5	uploads\\1758790792406-Pista Milk Shake.png	Pista Milk Shake	Welcome Drinks	null
7	uploads\\1758790823137-Mango Juice.png	Mango Juice	Welcome Drinks	null
228	uploads\\1758871583939-Masala Wada.png	Masala Wada	Hot	null
229	uploads\\1758871613225-Dahi Wada.png	Dahi Wada	Hot	null
232	uploads\\1758871685375-Onion Pakodi.png	Onion Pakodi	Hot	null
238	uploads\\1758871832358-Mixture.png	Mixture	Hot	null
234	uploads\\1758871879233-Vankaya Pakodi.png	Vankaya Pakodi	Hot	null
239	uploads\\1758871949866-Onion Rings.png	Onion Rings	Hot	null
143	uploads\\1758969186684-Paneer Butter Masala.png	Paneer Butter Masala	North Curries	null
147	uploads\\1758969264779-Palak Paneer.png	Palak Panneer	North Curries	null
151	uploads\\1758969360305-Bhindi Fry.png	Bendi Fry	North Curries	null
155	uploads\\1758969471739-Alu Gobi Mutter.png	Alu Gobi Mutter	North Curries	null
157	uploads\\1758969524563-Veg. Kofta.png	Veg. Kofta	North Curries	null
160	uploads\\1758969740964-Veg. Jaipuri.png	Veg. Jaipuri	North Curries	null
162	uploads\\1758969789005-Mushroom Mutter.png	Mushroom Mutter	North Curries	null
165	uploads\\1758969934443-Tawa Alu Sabji.png	Tawa Sabji	North Curries	null
167	uploads\\1758969974922-Amritsari Chole.png	Amritsari Chole	North Curries	null
170	uploads\\1758970039627-Palak Babycorn Mutter.png	Palak Babycorn Mutter	North Curries	null
173	uploads\\1758970144778-Tawa Alu Sabji.png	Tawa Alu Sabji	North Curries	null
175	uploads\\1758970206147-Veg. Kolhapuri.png	Veg. Kola Puri	North Curries	null
177	uploads\\1758970366379-Kala Jamun Curry.png	Kala Jamun Curry	North Curries	null
179	uploads\\1758972041494-Vankaya Karam.png	Vankaya Karam	South Curries	null
182	uploads\\1758972268624-Kanda Bachali.png	Kanda Bachali	South Curries	null
185	uploads\\1758972336507-Veg Kootu.png	Veg Koottu	South Curries	null
186	uploads\\1758972378589-Bhindi Fry.png	Bendi Fry	South Curries	null
188	uploads\\1758972436452-Aloo Fry.png	Alu Fry	South Curries	null
270	uploads\\1760075833306-Mini Pizza.png	Mini Pizza	Chinese Counter	null
272	uploads\\1760075866538-Chilly Cheese Roll.png	Chilly Cheese Roll	Chinese Counter	null
277	uploads\\1760076050249-Panneer Finger Sizzlers.png	Panneer Finger Sizzlers	Chinese Counter	null
279	uploads\\1760076089946-Thai Chilly Beans.png	Thai Chilly Beans	Chinese Counter	null
284	uploads\\1760076350969-Corn Cutlet.png	Corn Cutlet	Chinese Counter	null
286	uploads\\1760076405777-French Fries.png	French Fries	Chinese Counter	null
290	uploads\\1760076535144-Hara Bara Tikka.png	Hara Bara Tikka	Chinese Counter	null
216	uploads\\1760076887787-Tomato Pachadi.png	Tomato Pachadi	Pickles & Powders	null
218	uploads\\1760076924404-Dosaavakaya.png	Dosaavakaya	Pickles & Powders	null
219	uploads\\1760076938659-Allam Pachadi.png	Allam Pachadi	Pickles & Powders	null
222	uploads\\1760076985587-Kandi Podi.png	Kandi Podi	Pickles & Powders	null
224	uploads\\1760077017051-Tomato Roti Pachadi.png	Tomato Roti Pachadi	Pickles & Powders	null
226	uploads\\1760077115396-Red Chilly.png	Red Chilly	Pickles & Powders	null
405	uploads\\1758538912419-Payasam.jpg	Payasam	Prasadam	null
199	uploads\\1758972829544-Mulakkada Tomato.png	Mulakkada Tomato Curry	South Curries	null
296	uploads\\1759043938564-Chena Dahi Vada.png	China Dahi Wada	Chat Counter	null
305	uploads\\1759044230211-Sev Puri.png	Sev Puri	Chat Counter	null
313	uploads\\1759044516761-Raja Rani Chat.png	Raja Rani Chat	Chat Counter	null
321	uploads\\1759044717311-Corn Bhel Puri.png	Corn Bhel Puri	Chat Counter	null
329	uploads\\1759045568362-Paan.png	Pan	Pan Counter	null
332	uploads\\1759045629714-Kesar Paan.png	Kesar Pan	Pan Counter	null
338	uploads\\1760007545681-Rasgulla ice cream.png	Rasgulla	Dessert	null
356	uploads\\1760007996073-Kulfi In Cups.png	Kulfi In Cups	Dessert	null
347	uploads\\1760008226529-Chocolates.png	Chocolate	Dessert	null
366	uploads\\1760009459382-Rasam Wada.png	Rasam Wada	Tiffins	null
423	uploads\\1760012063877-White Rice.png	White Rice	Common Items	null
426	uploads\\1760012088868-Fryums.png	Frimes	Common Items	null
433	uploads\\1760012231957-Vadiyalu.png	Vadiyallu	Common Items	null
415	uploads\\1760074275404-Murukulu.png	Murukulu	Sarray	null
442	uploads\\1760074437547-Rasam.png	Rasam 	Common Items	null
263	uploads\\1760075294139-Mini Burger.png	Mini Burger	Chinese Counter	null
280	uploads\\1760076173929-Veg. Manchow Soup.png	Manchow Soup	Chinese Counter	null
227	uploads\\1760077141426-Karivepaku Podi.png	Karvepaku Podi	Pickles & Powders	null
375	uploads\\1760077479274-Palak Pakodi.png	Palak Pakodi	Snacks	null
385	uploads\\1760077622347-Dahi Wada.png	Dahi Wada	Snacks	null
392	uploads\\1760079442719-Veg. Upma.png	Veg. Upma	Breakfast	null
395	uploads\\1760079478695-Pesarattu.png	Pesarattu	Breakfast	null
403	uploads\\1758538787894-Kesar Halwa.jpg	Kesar Halwa	Prasadam	null
201	uploads\\1758973039186-Bhindi Fry With Kaju.png	Bendi Fry With Kaju	South Curries	null
293	uploads\\1759043865529-Pani Puri.png	Pani Puri	Chat Counter	null
298	uploads\\1759043978906-Dosa Stall With Chat.png	Dosa Stall With Chat	Chat Counter	null
306	uploads\\1759044251525-Pav Bhaji.png	Pav Bhaji	Chat Counter	null
314	uploads\\1759044536741-Chines Dahi Wada.png	Chines Dahi Wada	Chat Counter	null
322	uploads\\1759044749759-Rava Pani Puri.png	Ravva Pani Puri	Chat Counter	null
330	uploads\\1759045590053-Sada Paan.png	Sada Pan	Pan Counter	null
242	uploads\\1759045822392-Veg. Noodles.png	Veg. Noodles	Chinese Counter	null
339	uploads\\1760007557850-Fruit Salad With Custard.png	Fruit Salad With Custured	Dessert	null
357	uploads\\1760007901594-Chocolate Fountain.png	Chocolate Fountain	Dessert	null
348	uploads\\1760008111944-Honey Moon Delight.png	Honey Moon Delight	Dessert	null
367	uploads\\1760009468165-Soyabean Dosa.png	Soyabean Dosa	Tiffins	null
425	uploads\\1760012078747-Raitha.png	Raitha	Common Items	null
427	uploads\\1760012101939-Challa Mirchi.png	Challa Mirchi	Common Items	null
435	uploads\\1760012254133-Coffee.png	Coffee	Common Items	null
412	uploads\\1760074228629-Badusha.png	Badhusha	Sarray	null
244	uploads\\1760074746379-Tomato Soup.png	Tomato Soup	Chinese Counter	null
265	uploads\\1760075324044-Golden Fry Babycorn.png	Golden Fry Babycorn	Chinese Counter	null
285	uploads\\1760076365145-Cheese Chilly Toast.png	Cheese Chilly Toast	Chinese Counter	null
370	uploads\\1760077414443-Alu Bonda.png	Alu Bonda	Snacks	null
374	uploads\\1760077466563-Onion Pakodi.png	Onion Pakodi	Snacks	null
384	uploads\\1760077610729-Ragada Cutlet.png	Ragada Cutlet	Snacks	null
393	uploads\\1760079455423-Puri With Alu Curry.png	Puri With Alu Curry	Breakfast	null
397	uploads\\1760079502425-Hot Pongal.png	Hot Pongal	Breakfast	null
95	\N	Russian Salad	Salads	null
299	\N	Paneer Chilwa	Chat Counter	\N
349	\N	Choco Roco	Dessert	\N
205	uploads\\1758973577531-Mango Pappu.png	Mango Pappu	Dal & Liquids	null
301	uploads\\1759044129278-Alu Toast.png	Alu Toast	Chat Counter	null
307	uploads\\1759044298678-Ragada Cutlet.png	Mewa Ragada Cutlet	Chat Counter	null
315	uploads\\1759044552417-Alu Chat.png	Alu Chat	Chat Counter	null
323	uploads\\1759044779249-Dahi Kachori.png	Dahi Kachori	Chat Counter	null
331	uploads\\1759045609938-Sweet Paan.png	Sweet Pan	Pan Counter	null
336	uploads\\1760007495164-Ice Cream (Vanilla).png	Ice Cream (Vanilla)	Dessert	null
340	uploads\\1760007569266-Vanilla.png	Vanilla	Dessert	null
358	uploads\\1760007923130-Sugar Candy.png	Sugar Candy	Dessert	null
428	uploads\\1760012119452-Kobbari Chutney.png	Cobbarl Chutney	Common Items	null
432	uploads\\1760012222883-409.png	Karam Podi	Common Items	null
408	uploads\\1760074183868-Laddu Small Size.png	Laddu Small Size	Sarray	null
418	uploads\\1760074307060-Khara Boondi.png	Khara Bhoondi	Sarray	null
247	uploads\\1760074852523-Hong Kong Noodles.png	Hong Kong Noodles	Chinese Counter	null
269	uploads\\1760075420393-Spanish Soup.png	Spanish Soup	Chinese Counter	null
214	uploads\\1760076856168-Mango Pickle.png	Mango Pickle	Pickles & Powders	null
368	uploads\\1760077384754-Pop Corn.png	Pop Corn	Snacks	null
373	uploads\\1760077452018-Mysore Bajji.png	Mysore Bajji	Snacks	null
378	uploads\\1760077521450-Aratikaya Bajji.png	Aratikaya Bajji	Snacks	null
388	uploads\\1760077658737-Sandwich.png	Sandwich	Snacks	null
398	uploads\\1760079515792-Steam Idly.png	Steam Idly	Breakfast	null
400	uploads\\1760079534975-Sandwich.png	Sandwich	Breakfast	null
343	\N	Pineapple Chikki	Dessert	\N
402	uploads\\1758538892492-Chakkara Pongal.jpg	Chakkara Pongal	Prasadam	null
209	uploads\\1758973712916-Majjiga Pulusu.png	Majjiga Pulusu	Dal & Liquids	null
300	uploads\\1759044097003-Tomato Dosa With Chat.png	Tomato Dosa With Chat	Chat Counter	null
308	uploads\\1759044321882-Dahi Gujiya.png	Dahi Gujiya	Chat Counter	null
309	uploads\\1759044340453-Pani Puri (2 Types).png	Pani Puri (2 Types)	Chat Counter	null
316	uploads\\1759044570185-Dhokla.png	Dokla	Chat Counter	null
324	uploads\\1759044806411-Zeera Alu Chat.png	Zeera Alu Chat	Chat Counter	null
333	uploads\\1759045662929-Fire Paan.png	Fire Pan	Pan Counter	null
341	uploads\\1760007580458-Butterscotch.png	Butter Scotch	Dessert	null
361	uploads\\1760007973297-Pastries.png	Pastries	Dessert	null
352	uploads\\1760008057161-Caramel Nuts.png	Caramel Nuts	Dessert	null
424	uploads\\1760012071123-Ghee.png	Ghee	Common Items	null
434	uploads\\1760012245508-409.png	Idly Karam Podi	Common Items	null
437	uploads\\1760012291156-409.png	Kandi Podi	Common Items	null
413	uploads\\1760074240901-Madatha Kaja.png	Madatha Kaja	Sarray	null
249	uploads\\1760074879707-Veg. Manchow Soup.png	Veg. Manchow Soup	Chinese Counter	null
271	uploads\\1760075854298-Mongolian Noodles.png	Mangolian Noodles	Chinese Counter	null
217	uploads\\1760076910955-Dosakaya Vankaya Pachadi.png	Dosavankaya Pachadi	Pickles & Powders	null
371	uploads\\1760077426474-Veg Bonda.png	Veg Bonda	Snacks	null
381	uploads\\1760077567434-Samosa.png	Samosa	Snacks	null
391	uploads\\1760079432063-Wada.png	Wada	Breakfast	null
379	uploads\\1760519817118-1760077537578-Punugulu.png	Punugulu	Snacks	null
303	\N	Canfi Chat	Chat Counter	\N
212	uploads\\1758973774908-Live Dal.png	Live Dal	Dal & Liquids	null
350	\N	Tooty Frooty	Dessert	\N
351	\N	Mocktail Counter	Dessert	\N
354	\N	Honey Almond	Dessert	\N
440	uploads\\1758975102150-Raitha.png	Raitha	Dal & Liquids	null
304	uploads\\1759044210324-Dahi Papdi.png	Dahi Papidi	Chat Counter	null
311	uploads\\1759044443507-Ice Cream Fry with chat.png	Ice Cream Fry	Chat Counter	null
8	uploads\\1758790833682-Kharbuja Juice.png	Kharbuja Juice	Welcome Drinks	null
317	uploads\\1759044597042-Khandvi.png	Kandvi	Chat Counter	null
320	uploads\\1759044682007-Maida Katori.png	Maida Katori	Chat Counter	null
325	uploads\\1759045303147-Tomato Dosa With Chat.png	Tomato Omlet	Chat Counter	null
328	uploads\\1759045445856-Foreign Fruits.png	Foreign Fruits	Fruit Stall	null
334	uploads\\1759045684236-Chocolate Paan.png	Chocolate Pan	Pan Counter	null
337	uploads\\1760007533531-Rasmalai ice cream.png	Rasmalai	Dessert	null
473	\N	Tawa Meetai	Sweets	\N
474	\N	Indra Puri	Sweets	\N
342	uploads\\1760007595454-Strawberry.png	Strawberry	Dessert	null
359	uploads\\1760007938250-Ice Gola.png	Ice Gola	Dessert	null
355	uploads\\1760008006258-Straw Berry Ripple.png	Straw Berry Ripple	Dessert	null
346	uploads\\1760008318353-Chocolates.png	Chocolate Ripple	Dessert	null
481	\N	Butterscotch Roll	Sweets	\N
482	\N	Rim Zim (Bengali)	Sweets	\N
483	\N	German Telox	Sweets	\N
364	uploads\\1760009442710-Dosa.png	Dosa Stall	Tiffins	null
485	\N	Kesar Indra Puri	Sweets	\N
486	\N	Khus Khus Katori	Sweets	\N
420	uploads\\1760011960571-Paan.png	Paan	Common Items	null
489	\N	Taka Tak (Hot)	Sweets	\N
490	\N	Mango Alaska	Sweets	\N
491	\N	Dry Fruit Tawa	Sweets	\N
492	\N	Fruit Jilebi	Sweets	\N
493	\N	American Dollar	Sweets	\N
494	\N	Pancha Ratan Halwa	Sweets	\N
422	uploads\\1760012053228-Curd.png	Curd	Common Items	null
429	uploads\\1760012146579-Palli Chutney.png	Palli Chutney	Common Items	null
499	\N	Ferni Ka Meeta	Sweets	\N
431	uploads\\1760012194412-Allam Chutney.png	Allam Chutney	Common Items	null
503	\N	Dry Fruit Germon Telox	Sweets	\N
407	uploads\\1760074174217-Laddu Big Size.png	Laddu Big Size	Sarray	null
436	uploads\\1760012306067-Tea.png	Tea	Common Items	null
409	uploads\\1760074196237-Sunnundalu.png	Sunnundalu	Sarray	null
404	uploads\\1758538877116-Pulihora.jpg	Pulihora	Prasadam	null
411	uploads\\1760074219772-Mysorepak.png	Mysorepak	Sarray	null
451	uploads\\1758625936315-Samiya Payasam.png	Samiya Payasam	Sweets	null
452	uploads\\1758626088591-Madatha Kaja.png	Madatha Kaja	Sweets	null
456	uploads\\1758626104774-Putharekulu.png	Putharekulu	Sweets	null
505	uploads\\1758627293519-Milky Bar.png	Milky bar	Sweets	null
458	uploads\\1758626138223-Kala Jamun.png	Kala Jamun	Sweets	null
459	uploads\\1758626150494-Double Ka Meeta.png	Double Ka Meeta	Sweets	null
460	uploads\\1758626165597-Qubani Ka Meeta.png	Qubani Ka Meeta	Sweets	null
461	uploads\\1758626175903-Jilebi.png	Jilebi	Sweets	null
462	uploads\\1758626192734-Kaddu ka Halwa.png	Kaddu Halwa	Sweets	null
463	uploads\\1758626200419-Jangri.png	Jangri	Sweets	null
464	uploads\\1758626209743-Tawa Sweet.png	Tawa Sweet	Sweets	null
466	uploads\\1758626254071-Dry Fruit Burfi.png	Dry Fruit Burfi	Sweets	null
468	uploads\\1758626305679-Milk Mysore Pak.png	Milk Mysore Pak	Sweets	null
453	uploads\\1758626350656-Carrot Halwa.png	Carrot Halwa	Sweets	null
455	uploads\\1758626377879-Kakinada Kaja.png	Kakinada Kaja	Sweets	null
444	uploads\\1758626408959-Burelu.png	Burelu	Sweets	null
472	uploads\\1758626449398-Rasgulla.png	Rasgulla	Sweets	null
476	uploads\\1758626527384-Dil Jamun.png	Dil Jamun	Sweets	null
450	uploads\\1758626554319-Laddu.png	Laddu	Sweets	null
448	uploads\\1758626701270-Fruit Kesari.png	Fruit Kesari	Sweets	null
447	uploads\\1758626731972-Chakkara Pongali.png	Chakkara Pongali	Sweets	null
443	uploads\\1758626831023-Bobbatlu.png	Bobbatlu	Sweets	null
501	uploads\\1758626891489-Tripple Pudding.png	Tripple Pudding	Sweets	null
457	uploads\\1758627206692-Badhusha.png	Badhusha	Sweets	null
495	uploads\\1758627400151-Mango Sandwich.png	Mango Sandwich	Sweets	null
500	uploads\\1758627453294-Shahi Tukda.png	Shahi Thukuda	Sweets	null
496	uploads\\1758627476049-Malai Chenna Toast.png	Malai Chenna Toast	Sweets	null
445	uploads\\1758627768622-Sojappa.png	Sojappa	Sweets	null
480	uploads\\1758627826055-Malai Sandwich.png	Malai Sandwich	Sweets	null
487	uploads\\1758627862214-Dry Fruit Chikki.png	Dry Fruit Chekki	Sweets	null
416	uploads\\1760074285868-Janthikalu.png	Janthikalu	Sarray	null
369	uploads\\1760077399731-American Sweet Corn.png	American Sweet Corn	Snacks	null
441	uploads\\1760074447075-Sambar.png	Sambar 	Common Items	null
372	uploads\\1760077439010-Alu Bajji.png	Alu Bajji	Snacks	null
377	uploads\\1760077503563-Mirchi Bajji.png	Mirchi Bajji	Snacks	null
380	uploads\\1760077553186-Assorted Baiji.png	Assorted Baiji	Snacks	null
383	uploads\\1760077597634-Pani Puri.png	Pani Puri	Snacks	null
389	uploads\\1760077672673-Grill Sandwich.png	Grill Sandwich	Snacks	null
390	uploads\\1760079414831-Idly.png	Idly	Breakfast	null
394	uploads\\1760079468400-Doas.png	Doas Stall	Breakfast	null
399	uploads\\1760079523671-Bread Toast.png	Bread Toast	Breakfast	null
401	uploads\\1760079545359-Bread Butter Jam.png	Bread Butter Jam	Breakfast	null
465	uploads\\1758626241697-Paneer Jalebi.png	Paneer Jalebi	Sweets	null
467	uploads\\1758626283464-Kaju Roll.png	Kaju Roll	Sweets	null
469	uploads\\1758626332927-Litchi Gulla.png	Litchi Gulla	Sweets	null
454	uploads\\1758626361519-Gulab Jamun.png	Gulab Jamun	Sweets	null
470	uploads\\1758626397698-Paan Petha.png	Paan Petha	Sweets	null
471	uploads\\1758626436969-Rasmalai.png	Rasmalai	Sweets	null
475	uploads\\1758626516567-Kaju Pista Roll.png	Kaju Pista Roll	Sweets	null
449	uploads\\1758626680791-Paramannam.png	Paramannam	Sweets	null
446	uploads\\1758626715702-Chiroti.png	Chiroti	Sweets	null
477	uploads\\1758626814228-Mothichur Laddu.png	Mothichur Laddu	Sweets	null
478	uploads\\1758626849511-Malpuri.png	Malpuri	Sweets	null
497	uploads\\1758626941391-Pineapple Gola.png	Pineapple Gola	Sweets	null
502	uploads\\1758627223559-Badam Chikki.png	Badam Chekki	Sweets	null
498	uploads\\1758627312519-Chocolate Laddu (Dry Fruit).png	Chocolate Laddu (Dry Fruit)	Sweets	null
504	uploads\\1758627429624-Dry Fruit Anjeer Checker.png	Dry Fruit Anjeer Chekar	Sweets	null
488	uploads\\1758627516736-Tutti Frutti.png	Tooty Frooty (Bengali)	Sweets	null
479	uploads\\1758627794547-Moong dal Halwa.png	Moong Dal Halwa	Sweets	null
484	uploads\\1758629228879-Baked Rasgulla.png	Baked Rasagulla	Sweets	null
312	uploads\\1759044481458-Butter Spl. Pav Bhaji.png	Spl. Pav Bhaji	Chat Counter	null
145	\N	Alu Gobi 	North Curries	null
3	uploads\\1758790709888-Watermelon Juice.png	Watermelon Juice	Welcome Drinks	null
4	uploads\\1758790772997-Pineapple Juice.png	Pineapple Juice	Welcome Drinks	null
6	uploads\\1758790804153-Fruit Punch.png	Fruit Punch	Welcome Drinks	null
9	uploads\\1758790847116-Dry Fruit Milk Shake.png	Dry Fruit Milk Shake	Welcome Drinks	null
10	uploads\\1758790857825-Orange Blossom.png	Orange Blossom	Welcome Drinks	null
231	uploads\\1758871657795-Aratikaya Bajji.png	Aratikaya Bajji	Hot	null
237	uploads\\1758871812257-Alu Bajji.png	Alu Bajji	Hot	null
233	uploads\\1758871856195-Cabbage Pakodi.png	Cabbage Pakodi	Hot	null
236	uploads\\1758871924433-Alu Bonda.png	Alu Bonda	Hot	null
241	uploads\\1758871990012-Tomato Rings.png	Tomato Rings	Hot	null
149	uploads\\1758969306085-Alu Palak.png	Alu Palak	North Curries	null
153	uploads\\1758969411411-Paneer Do Pyaza.png	Paneer Do Pyaza	North Curries	null
156	uploads\\1758969497035-Bagara Baingan.png	Bagara Baigan	North Curries	null
159	uploads\\1758969708115-Baby Corn Jalfrezi.png	Babycorn Jal Frize	North Curries	null
163	uploads\\1758969826683-Alu Palak.png	Palak Alu	North Curries	null
166	uploads\\1758969951762-Dal Makhani.png	Dal Makhani	North Curries	null
169	uploads\\1758970017466-Paneer Angara.png	Paneer Angara	North Curries	null
174	uploads\\1758970174314-Paneer Makhanwala.png	Panneer Makhwanwala	North Curries	null
178	uploads\\1758970395307-Ginger Aloo.png	Ginger Alu	North Curries	null
181	uploads\\1758972247666-Alu Upma Curry.png	Alu Upma Curry	South Curries	null
183	uploads\\1758972292268-Panasapottu Kura.png	Panasapottu Kura	South Curries	null
187	uploads\\1758972400205-Donda Fry.png	Donda Fry	South Curries	null
189	uploads\\1758972544869-Cabbage Beans Coconut Poriyal.png	Cabbage Beans Coconut Poriyal	South Curries	null
345	uploads\\1760007858226-Pista ice cream.png	Pista	Dessert	null
410	uploads\\1760074206068-Ariselu.png	Aresellu	Sarray	null
252	uploads\\1760074937146-Veg. Sweet Corn Soup.png	Veg. Sweet Corn Soup	Chinese Counter	null
275	uploads\\1760075990596-Panneer Tophu.png	Panneer Tophu	Chinese Counter	null
221	uploads\\1760076972244-Korivi Karam.png	Korivi Karam	Pickles & Powders	null
382	uploads\\1760077581354-Irani Samosa.png	Irani Samosa	Snacks	null
171	uploads\\1760507615901-download.jpeg	Veg. Hara Bara	North Curries	null
\.


--
-- TOC entry 5016 (class 0 OID 0)
-- Dependencies: 222
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 1, false);


--
-- TOC entry 5017 (class 0 OID 0)
-- Dependencies: 218
-- Name: categories_sno_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_sno_seq', 26, true);


--
-- TOC entry 5018 (class 0 OID 0)
-- Dependencies: 220
-- Name: category_sno_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_sno_seq', 27, true);


--
-- TOC entry 5019 (class 0 OID 0)
-- Dependencies: 216
-- Name: customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customers_id_seq', 12, true);


--
-- TOC entry 5020 (class 0 OID 0)
-- Dependencies: 234
-- Name: invoices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.invoices_id_seq', 1, false);


--
-- TOC entry 5021 (class 0 OID 0)
-- Dependencies: 230
-- Name: menu_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menu_categories_id_seq', 1, false);


--
-- TOC entry 5022 (class 0 OID 0)
-- Dependencies: 228
-- Name: menu_contexts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menu_contexts_id_seq', 1, true);


--
-- TOC entry 5023 (class 0 OID 0)
-- Dependencies: 232
-- Name: menu_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menu_items_id_seq', 1, false);


--
-- TOC entry 5024 (class 0 OID 0)
-- Dependencies: 226
-- Name: menus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.menus_id_seq', 19, true);


--
-- TOC entry 5025 (class 0 OID 0)
-- Dependencies: 224
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 1, false);


--
-- TOC entry 4811 (class 2606 OID 16433)
-- Name: products categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT categories_pkey PRIMARY KEY (sno);


--
-- TOC entry 4815 (class 2606 OID 24897)
-- Name: categories categories_pkey1; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey1 PRIMARY KEY (id);


--
-- TOC entry 4813 (class 2606 OID 16442)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (sno);


--
-- TOC entry 4809 (class 2606 OID 16406)
-- Name: customers customers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);


--
-- TOC entry 4831 (class 2606 OID 24975)
-- Name: invoices invoices_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoices
    ADD CONSTRAINT invoices_pkey PRIMARY KEY (id);


--
-- TOC entry 4826 (class 2606 OID 24939)
-- Name: menu_categories menu_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_categories
    ADD CONSTRAINT menu_categories_pkey PRIMARY KEY (id);


--
-- TOC entry 4823 (class 2606 OID 24926)
-- Name: menu_contexts menu_contexts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_contexts
    ADD CONSTRAINT menu_contexts_pkey PRIMARY KEY (id);


--
-- TOC entry 4829 (class 2606 OID 24952)
-- Name: menu_items menu_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_items
    ADD CONSTRAINT menu_items_pkey PRIMARY KEY (id);


--
-- TOC entry 4820 (class 2606 OID 24918)
-- Name: menus menus_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menus
    ADD CONSTRAINT menus_pkey PRIMARY KEY (id);


--
-- TOC entry 4817 (class 2606 OID 24905)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- TOC entry 4824 (class 1259 OID 24983)
-- Name: idx_cat_context; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_cat_context ON public.menu_categories USING btree (context_id);


--
-- TOC entry 4821 (class 1259 OID 24982)
-- Name: idx_context_menu; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_context_menu ON public.menu_contexts USING btree (menu_id);


--
-- TOC entry 4827 (class 1259 OID 24984)
-- Name: idx_item_category; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_item_category ON public.menu_items USING btree (category_id);


--
-- TOC entry 4818 (class 1259 OID 24981)
-- Name: idx_menu_date; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_menu_date ON public.menus USING btree (date);


--
-- TOC entry 4836 (class 2606 OID 24976)
-- Name: invoices invoices_menu_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.invoices
    ADD CONSTRAINT invoices_menu_id_fkey FOREIGN KEY (menu_id) REFERENCES public.menus(id) ON DELETE CASCADE;


--
-- TOC entry 4834 (class 2606 OID 24940)
-- Name: menu_categories menu_categories_context_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_categories
    ADD CONSTRAINT menu_categories_context_id_fkey FOREIGN KEY (context_id) REFERENCES public.menu_contexts(id) ON DELETE CASCADE;


--
-- TOC entry 4833 (class 2606 OID 24927)
-- Name: menu_contexts menu_contexts_menu_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_contexts
    ADD CONSTRAINT menu_contexts_menu_id_fkey FOREIGN KEY (menu_id) REFERENCES public.menus(id) ON DELETE CASCADE;


--
-- TOC entry 4835 (class 2606 OID 24953)
-- Name: menu_items menu_items_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.menu_items
    ADD CONSTRAINT menu_items_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.menu_categories(id) ON DELETE CASCADE;


--
-- TOC entry 4832 (class 2606 OID 24906)
-- Name: product product_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE SET NULL;


-- Completed on 2025-10-28 16:43:55

--
-- PostgreSQL database dump complete
--

\unrestrict QdRtAUeSY0PCDfeSTv7W21CR1tMhVag4zajy7yxsMMwUvb24pG7fvRyIbjE7Qqb

-- Completed on 2025-10-28 16:43:55

--
-- PostgreSQL database cluster dump complete
--

