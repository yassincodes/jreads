import React, { useState, useMemo, useEffect } from 'react';

const App = () => {
  const books = [
    { title: 'Manhattan Toy Skwish Classic', image: 'https://m.media-amazon.com/images/I/71j952bB2UL._AC_SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B000GI0S4E', rating: '4.8', price: '$53.89', author: 'Manhattan Toy', shelf: 'other' },
    { title: 'The Birth of Tragedy: Out of the Spirit of Music', image: 'https://m.media-amazon.com/images/I/71TEnhpMqxL._SL1199_.jpg', amazon_link: 'https://www.amazon.com/dp/B002RI9DFG', rating: '4.6', price: '$9.99', author: 'Friedrich Nietzsche', shelf: 'philosophy' },
    { title: 'The Annotated Lolita: Revised and Updated', image: 'https://m.media-amazon.com/images/I/51V0vd4U0XL.jpg', amazon_link: 'https://www.amazon.com/dp/B004KABE2Y', rating: '4.5', price: '$4.99', author: 'Vladimir Nabokov', shelf: 'fiction' },
    { title: 'The Formula: Unlocking the Secrets to Raising Highly Successful Children', image: 'https://m.media-amazon.com/images/I/81A4437KLqL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B07B26L772', rating: '4.6', price: '$14.55', author: 'Ronald F. Ferguson', shelf: 'parenting' },
    { title: 'The Serious Guide to Joke Writing', image: 'https://m.media-amazon.com/images/I/61w-lSRx2rL._SL1000_.jpg', amazon_link: 'https://www.amazon.com/dp/B07JLRZ3MD', rating: '4.4', price: '$9.99', author: 'Sally Holloway', shelf: 'writing' },
    { title: 'The Prince of Mathematics: Carl Friedrich Gauss', image: 'https://m.media-amazon.com/images/I/51E2mvDWnGL.jpg', amazon_link: 'https://www.amazon.com/dp/B0049P1YUW', rating: '4.2', price: '$21.95', author: 'M.B.W. Tent', shelf: 'mathematics' },
    { title: 'Euler\'s Pioneering Equation', image: 'https://m.media-amazon.com/images/I/71RDUF1bACL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B077TPGSDQ', rating: '4.4', price: '$9.99', author: 'Robin Wilson', shelf: 'mathematics' },
    { title: 'John von Neumann: The Scientific Genius', image: 'https://m.media-amazon.com/images/I/91hRAg3lU0L._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B01H4IREWC', rating: '4.3', price: '$9.99', author: 'Norman Macrae', shelf: 'biography' },
    { title: 'In the Closet of the Vatican', image: 'https://m.media-amazon.com/images/I/715w-M6kGeL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B07NJ9DQSK', rating: '4.2', price: '$14.49', author: 'Frédéric Martel', shelf: 'politics' },
    { title: 'Kushner, Inc.: Greed. Ambition. Corruption.', image: 'https://m.media-amazon.com/images/I/81UELrxK+fL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B07DZYV8MM', rating: '4.0', price: '$14.99', author: 'Vicky Ward', shelf: 'politics' },
    { title: 'The Threat: How the FBI Protects America', image: 'https://m.media-amazon.com/images/I/81HWTh+xgNL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B07HFMYQPG', rating: '4.6', price: '$14.99', author: 'Andrew G. McCabe', shelf: 'politics' },
    { title: 'We Are All Made of Molecules', image: 'https://m.media-amazon.com/images/I/91TSDWbpsQL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B00N6PD3T6', rating: '4.4', price: '$5.99', author: 'Susin Nielsen', shelf: 'fiction' },
    { title: 'Mycelium Running: How Mushrooms Can Help Save the World', image: 'https://m.media-amazon.com/images/I/51Y6WiYO74L.jpg', amazon_link: 'https://www.amazon.com/dp/B004GTLKEG', rating: '4.8', price: '$15.99', author: 'Paul Stamets', shelf: 'science' },
    { title: 'The Coming of the Terror in the French Revolution', image: 'https://m.media-amazon.com/images/I/71I3XK1LIZL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B00TDKAV0W', rating: '4.4', price: '$19.25', author: 'Timothy Tackett', shelf: 'history' },
    { title: 'What is Life?: How Chemistry Becomes Biology', image: 'https://m.media-amazon.com/images/I/71GvJWpXfnL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B008RYSKKS', rating: '4.2', price: '$9.99', author: 'Addy Pross', shelf: 'science' },
    { title: 'The Political Mind', image: 'https://m.media-amazon.com/images/I/819xsDGES2L._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B0017T0B2U', rating: '4.3', price: '$12.99', author: 'George Lakoff', shelf: 'politics' },
    { title: 'What a Plant Knows', image: 'https://m.media-amazon.com/images/I/A1i7UIeWwJL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B0089RO8E0', rating: '4.6', price: '$9.94', author: 'Daniel Chamovitz', shelf: 'science' },
    { title: 'The Internet of Money', image: 'https://m.media-amazon.com/images/I/51l4w7dVlNL._SL1106_.jpg', amazon_link: 'https://www.amazon.com/dp/B01L9WM0H8', rating: '4.6', price: '$6.99', author: 'Andreas M. Antonopoulos', shelf: 'business' },
    { title: 'Lucifer\'s Banker Uncensored', image: 'https://m.media-amazon.com/images/I/71UqKF6ImUL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B08FBHNL4G', rating: '4.3', price: '$7.99', author: 'Bradley C. Birkenfeld', shelf: 'business' },
    { title: 'The Panama Papers: Breaking the Story', image: 'https://m.media-amazon.com/images/I/81wKXGlankL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B06X9QPDN2', rating: '4.4', price: '$6.00', author: 'Frederik Obermaier', shelf: 'business' },
    { title: 'Ramanujan\'s Lost Notebook: Part I', image: 'https://m.media-amazon.com/images/I/51PSoovzBGL._SL1323_.jpg', amazon_link: 'https://www.amazon.com/dp/B000QTD13I', rating: '4.5', price: '$103.20', author: 'George E. Andrews', shelf: 'mathematics' },
    { title: 'Fire and Fury: Inside the Trump White House', image: 'https://m.media-amazon.com/images/I/716ZzujFrzL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B077F4WZZY', rating: '4.0', price: '$14.99', author: 'Michael Wolff', shelf: 'politics' },
    { title: 'Never Split the Difference', image: 'https://m.media-amazon.com/images/I/91mBBcMEuRL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B014DUR7L2', rating: '4.7', price: '$3.99', author: 'Chris Voss', shelf: 'business' },
    { title: 'The Laundromat: Inside the Panama Papers Investigation', image: 'https://m.media-amazon.com/images/I/8128RUCvAwL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B072581MFP', rating: '4.4', price: '$9.99', author: 'Jake Bernstein', shelf: 'business' },
    { title: 'Rise and Kill First', image: 'https://m.media-amazon.com/images/I/91IjB+A13JL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B01N7LQ2NR', rating: '4.6', price: '$13.99', author: 'Ronen Bergman', shelf: 'politics' },
    { title: 'Churchill: Walking with Destiny', image: 'https://m.media-amazon.com/images/I/81PraCF2DgL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B079R3VH13', rating: '4.8', price: '$17.99', author: 'Andrew Roberts', shelf: 'biography' },
    { title: 'Contempt: A Memoir of the Clinton Investigation', image: 'https://m.media-amazon.com/images/I/9167G32ZIcL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B079R649JM', rating: '4.5', price: '$14.99', author: 'Ken Starr', shelf: 'politics' },
    { title: 'Fear: Trump in the White House', image: 'https://m.media-amazon.com/images/I/71igm+X0r3L._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B075RV48W3', rating: '4.4', price: '$14.99', author: 'Bob Woodward', shelf: 'politics' },
    { title: 'Sinatra: The Chairman', image: 'https://m.media-amazon.com/images/I/91QERN6mouL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B00XHYYQZQ', rating: '4.5', price: '$5.49', author: 'James Kaplan', shelf: 'biography' },
    { title: 'Frank: The Voice', image: 'https://m.media-amazon.com/images/I/91sIiU2LfqL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B003F3PMFM', rating: '4.5', price: '$11.99', author: 'James Kaplan', shelf: 'biography' },
    { title: 'Devil\'s Bargain: Steve Bannon, Donald Trump', image: 'https://m.media-amazon.com/images/I/81ioCiCq12L._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B0728KHFD5', rating: '4.3', price: '$11.99', author: 'Joshua Green', shelf: 'politics' },
    { title: 'Unhinged: An Insider\'s Account', image: 'https://m.media-amazon.com/images/I/71yNGNChHeL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B07DCGHNSZ', rating: '4.2', price: '$14.99', author: 'Omarosa Manigault Newman', shelf: 'politics' },
    { title: 'Secret Empires', image: 'https://m.media-amazon.com/images/I/91qSlLbp4WL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B07RC557SQ', rating: '4.6', price: '$13.99', author: 'Peter Schweizer', shelf: 'politics' },
    { title: 'House of Trump, House of Putin', image: 'https://m.media-amazon.com/images/I/81oQSOwWbCL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B07F5XV3ZZ', rating: '4.6', price: '$14.99', author: 'Craig Unger', shelf: 'politics' },
    { title: 'The Revolutionary Genius of Plants', image: 'https://m.media-amazon.com/images/I/71BXkG3BIrL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B074ZKF4PY', rating: '4.6', price: '$14.99', author: 'Stefano Mancuso', shelf: 'science' },
    { title: 'The Order of Time', image: 'https://m.media-amazon.com/images/I/81gN43Kt7sL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B077QX7XPH', rating: '4.4', price: '$10.99', author: 'Carlo Rovelli', shelf: 'science' },
    { title: 'Getting (More of) What You Want', image: 'https://m.media-amazon.com/images/I/71M6vqpDBJL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B06XCF9TC3', rating: '4.6', price: '$18.99', author: 'Margaret A. Neale', shelf: 'business' },
    { title: 'Coming Apart', image: 'https://m.media-amazon.com/images/I/71mCze8TfkL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B00540PAXS', rating: '4.4', price: '$14.99', author: 'Charles Murray', shelf: 'politics' },
    { title: 'The Chickenshit Club', image: 'https://m.media-amazon.com/images/I/71-XYO+I9jL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B06XBZFQR2', rating: '4.3', price: '$14.99', author: 'Jesse Eisinger', shelf: 'business' },
    { title: 'Evolution and Medicine', image: 'https://m.media-amazon.com/images/I/91OaKb3eGoL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B00CYH45GW', rating: '4.6', price: '$31.72', author: 'Robert L. Perlman', shelf: 'science' },
    { title: 'Why We Get Sick', image: 'https://m.media-amazon.com/images/I/81umlohzdlL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B006XWYJSI', rating: '4.4', price: '$8.99', author: 'Randolph M. Nesse', shelf: 'science' },
    { title: 'Principles of Evolutionary Medicine', image: 'https://m.media-amazon.com/images/I/81OZKQQUalL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B01DO5VY02', rating: '4.4', price: '$46.57', author: 'Peter Gluckman', shelf: 'science' },
    { title: 'The Dictator\'s Handbook', image: 'https://m.media-amazon.com/images/I/71+nnx4l9PL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B005GPSLHI', rating: '4.6', price: '$11.99', author: 'Bruce Bueno de Mesquita', shelf: 'politics' },
    { title: 'Probably Approximately Correct', image: 'https://m.media-amazon.com/images/I/712bkVnPxDL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B00BE650IQ', rating: '4.2', price: '$11.99', author: 'Leslie Valiant', shelf: 'mathematics' },
    { title: 'Nothing Is True and Everything Is Possible', image: 'https://m.media-amazon.com/images/I/91Ak8+DNd2L._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B00L4FSVZ6', rating: '4.3', price: '$11.99', author: 'Peter Pomerantsev', shelf: 'politics' },
    { title: 'The King of Oil: The Secret Lives of Marc Rich', image: 'https://m.media-amazon.com/images/I/51i5jRG+TSL.jpg', amazon_link: 'https://www.amazon.com/dp/B002SKDGRE', rating: '4.4', price: '$41.00', author: 'Daniel Ammann', shelf: 'biography' },
    { title: 'Incerto 4-Book Bundle', image: 'https://m.media-amazon.com/images/I/813Blis8WqL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B00K5190LE', rating: '4.7', price: '$51.99', author: 'Nassim Nicholas Taleb', shelf: 'philosophy' },
    { title: 'From Bacteria to Bach and Back', image: 'https://m.media-amazon.com/images/I/71RaxYGwxJL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B01HDSU2KY', rating: '4.3', price: '$14.34', author: 'Daniel C. Dennett', shelf: 'philosophy' },
    { title: 'The Bonfire of the Vanities', image: 'https://m.media-amazon.com/images/I/81lMvhvrB3L._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B003GYEGNO', rating: '4.4', price: '$9.99', author: 'Tom Wolfe', shelf: 'fiction' },
    { title: 'From Bauhaus to Our House', image: 'https://m.media-amazon.com/images/I/715Pz6GHHXL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B004ZM08CE', rating: '4.4', price: '$9.99', author: 'Tom Wolfe', shelf: 'architecture' },
    { title: 'Lying', image: 'https://m.media-amazon.com/images/I/71t3PAc7G2L._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B00G1SRB6Q', rating: '4.4', price: '$41.00', author: 'Sam Harris', shelf: 'philosophy' },
    { title: 'Emotion and Meaning in Music', image: 'https://m.media-amazon.com/images/I/71TIOjTZhBL._SL1500_.jpg', amazon_link: 'https://www.amazon.com/dp/B00DQMWSVI', rating: '4.4', price: '$33.00', author: 'Leonard B. Meyer', shelf: 'music' },
    { title: 'Adaptive Thinking', image: 'https://m.media-amazon.com/images/I/41mdekRsrOL.jpg', amazon_link: 'https://www.amazon.com/dp/B000SBEBME', rating: '4.1', price: '$31.72', author: 'Gerd Gigerenzer', shelf: 'psychology' },
    { title: 'Better Doctors, Better Patients, Better Decisions', image: 'https://m.media-amazon.com/images/I/616fYnrxCPL._SL1000_.jpg', amazon_link: 'https://www.amazon.com/dp/0262016036', rating: '4.7', price: '$13.19', author: 'Gerd Gigerenzer', shelf: 'medicine' }
  ];

  const [currentShelf, setCurrentShelf] = useState('all');
  const [currentRatingFilter, setCurrentRatingFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shelfCounts = useMemo(() => {
    const counts = { all: books.length };
    books.forEach((book) => {
      counts[book.shelf] = (counts[book.shelf] || 0) + 1;
    });
    return counts;
  }, []);

  const getStars = (rating) => {
    const full = Math.floor(parseFloat(rating));
    return '★'.repeat(full) + '☆'.repeat(5 - full);
  };

  const filteredAndSortedBooks = useMemo(() => {
    let filtered = books.filter((book) => {
      const shelfMatch = currentShelf === 'all' || book.shelf === currentShelf;
      const ratingMatch =
        currentRatingFilter === 'all' ||
        Math.round(parseFloat(book.rating)) === Number(currentRatingFilter);
      const searchMatch =
        !searchTerm ||
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());
      return shelfMatch && ratingMatch && searchMatch;
    });

    filtered.sort((a, b) => {
      let valA, valB;
      if (sortBy === 'title') [valA, valB] = [a.title, b.title];
      else if (sortBy === 'author') [valA, valB] = [a.author, b.author];
      else if (sortBy === 'rating') [valA, valB] = [parseFloat(a.rating), parseFloat(b.rating)];
      else if (sortBy === 'price')
        [valA, valB] = [
          parseFloat(a.price.replace('$', '')),
          parseFloat(b.price.replace('$', '')),
        ];

      if (typeof valA === 'string') return valA.localeCompare(valB);
      return valA - valB;
    });

    if (sortOrder === 'desc') filtered.reverse();
    return filtered;
  }, [currentShelf, currentRatingFilter, searchTerm, sortBy, sortOrder, books]);

  // ────────────────────────────────────────────────
  //                   STYLES (same as before)
  // ────────────────────────────────────────────────
  const s = {
    body: {
      margin: 0,
      fontFamily: '"Segoe UI", system-ui, sans-serif',
      background: '#f8f6f2',
      color: '#2d2d2d',
      minHeight: '100vh',
    },
    header: {
      background: '#fdfcfb',
      borderBottom: '1px solid #e5e1db',
      padding: '0.8rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    },
    headerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      flexWrap: 'wrap',
    },
    logo: {
      fontSize: 'clamp(1.4rem, 5vw, 1.9rem)',
      fontFamily: '"Georgia", serif',
      color: '#1a3c34',
      fontStyle: 'italic',
      fontWeight: 600,
      textDecoration: 'none',
    },
    searchBox: {
      flex: '1 1 280px',
      minWidth: '220px',
    },
    searchInput: {
      width: '100%',
      padding: '0.7rem 1rem',
      border: '1px solid #d5d0c9',
      borderRadius: '6px',
      fontSize: '1rem',
    },
    profileImage: {
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid #d5d0c9',
    },
    container: {
      maxWidth: '1400px',
      margin: '2rem auto',
      padding: '0 1rem',
      display: 'flex',
      gap: '2rem',
      flexDirection: isMobile ? 'column' : 'row',
    },
    sidebar: {
      width: isMobile ? '100%' : '260px',
      flexShrink: 0,
    },
    pageTitle: {
      fontSize: 'clamp(1.4rem, 4.5vw, 1.8rem)',
      color: '#1a3c34',
      margin: '0 0 1.5rem 0',
    },
    section: {
      background: '#fff',
      border: '1px solid #e5e1db',
      borderRadius: '8px',
      padding: '1.25rem',
      marginBottom: '1.5rem',
    },
    sectionTitle: {
      margin: '0 0 0.9rem 0',
      fontSize: '0.95rem',
      fontWeight: 600,
      color: '#444',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      padding: '0.5rem 0',
      cursor: 'pointer',
      color: '#1a3c34',
      fontSize: '0.97rem',
    },
    listItemActive: {
      fontWeight: 600,
      color: '#00635d',
    },
    count: {
      color: '#888',
      fontSize: '0.85rem',
      marginLeft: '0.4rem',
    },
    main: { flex: 1 },
    controls: {
      background: '#fff',
      border: '1px solid #e5e1db',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1.5rem',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      alignItems: 'center',
      fontSize: '0.95rem',
    },
    select: {
      padding: '0.5rem 0.8rem',
      border: '1px solid #d5d0c9',
      borderRadius: '6px',
      background: '#fff',
    },
    radioLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      whiteSpace: 'nowrap',
    },
    bookCount: {
      marginLeft: 'auto',
      color: '#555',
      fontSize: '0.95rem',
    },
    listContainer: {
      background: '#fff',
      border: '1px solid #e5e1db',
      borderRadius: '8px',
      overflow: 'hidden',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      display: isMobile ? 'none' : 'table',
    },
    mobileCards: {
      display: isMobile ? 'block' : 'none',
    },
    card: {
      padding: '1rem',
      borderBottom: '1px solid #f0ece5',
      display: 'flex',
      gap: '1rem',
      background: '#fff',
    },
    cardCover: {
      width: '70px',
      flexShrink: 0,
      borderRadius: '6px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    },
    cardContent: { flex: 1 },
    bookTitle: {
      color: '#00635d',
      fontWeight: 500,
      fontSize: '1.05rem',
      margin: '0 0 0.35rem 0',
      textDecoration: 'none',
      display: 'block',
    },
    bookAuthor: {
      color: '#444',
      fontSize: '0.92rem',
      marginBottom: '0.4rem',
    },
    stars: {
      color: '#f39c12',
      fontSize: '1.1rem',
      letterSpacing: '1px',
    },
    shelfTag: {
      background: '#e8f5f3',
      color: '#00635d',
      padding: '0.25rem 0.6rem',
      borderRadius: '12px',
      fontSize: '0.82rem',
      marginRight: '0.6rem',
    },
    price: {
      fontWeight: 600,
      color: '#00635d',
      fontSize: '1.05rem',
      margin: '0.6rem 0 0.3rem 0',
    },
    viewLink: {
      color: '#00635d',
      fontSize: '0.88rem',
      textDecoration: 'none',
    },
    th: {
      padding: '0.9rem 1rem',
      textAlign: 'left',
      background: '#f8f6f2',
      fontSize: '0.88rem',
      fontWeight: 600,
      color: '#444',
      whiteSpace: 'nowrap',
    },
    td: {
      padding: '1rem',
      borderBottom: '1px solid #f0ece5',
      verticalAlign: 'middle',
      fontSize: '0.96rem',
    },
    noResults: {
      padding: '4rem 1.5rem',
      textAlign: 'center',
      color: '#777',
      fontSize: '1.1rem',
    },
  };

  return (
    <div style={s.body}>
      <header style={s.header}>
        <div style={s.headerContainer}>
          <a href="#" style={s.logo}>
            jreads
          </a>

          <div style={s.searchBox}>
            <input
              type="search"
              placeholder="Search title or author…"
              style={s.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <img src="https://www.jmail.world/profile.png" alt="Profile" style={s.profileImage} />
        </div>
      </header>

      <div style={s.container}>
        <aside style={s.sidebar}>
          <h1 style={s.pageTitle}>
            My Books — {currentShelf === 'all' ? 'All' : currentShelf.charAt(0).toUpperCase() + currentShelf.slice(1)}
          </h1>

          <div style={s.section}>
            <h3 style={s.sectionTitle}>Bookshelves</h3>
            <ul style={s.list}>
              {['all', 'mathematics', 'politics', 'science', 'biography', 'business', 'philosophy', 'fiction', 'other', 'parenting', 'writing', 'history', 'architecture', 'music', 'psychology', 'medicine'].map(
                (val) => {
                  const name = val === 'all' ? 'All' : val.charAt(0).toUpperCase() + val.slice(1);
                  return (
                    <li
                      key={val}
                      style={{
                        ...s.listItem,
                        ...(currentShelf === val ? s.listItemActive : {}),
                      }}
                      onClick={() => setCurrentShelf(val)}
                    >
                      {name} <span style={s.count}>({shelfCounts[val] || 0})</span>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          <div style={s.section}>
            <h3 style={s.sectionTitle}>Rating</h3>
            <ul style={s.list}>
              {['all', '5', '4', '3'].map((val) => (
                <li
                  key={val}
                  style={{
                    ...s.listItem,
                    ...(currentRatingFilter === val ? s.listItemActive : {}),
                  }}
                  onClick={() => setCurrentRatingFilter(val)}
                >
                  {val === 'all' ? 'All Ratings' : '★'.repeat(Number(val)) + '☆'.repeat(5 - Number(val))}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main style={s.main}>
          <div style={s.controls}>
            <label>Sort by</label>
            <select style={s.select} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="rating">Rating</option>
              <option value="price">Price</option>
            </select>

            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <label style={s.radioLabel}>
                <input
                  type="radio"
                  name="order"
                  value="asc"
                  checked={sortOrder === 'asc'}
                  onChange={(e) => setSortOrder(e.target.value)}
                />
                Asc
              </label>
              <label style={s.radioLabel}>
                <input
                  type="radio"
                  name="order"
                  value="desc"
                  checked={sortOrder === 'desc'}
                  onChange={(e) => setSortOrder(e.target.value)}
                />
                Desc
              </label>
            </div>

            <div style={s.bookCount}>Showing {filteredAndSortedBooks.length} books</div>
          </div>

          <div style={s.listContainer}>
            {filteredAndSortedBooks.length === 0 ? (
              <div style={s.noResults}>No books match your filters.</div>
            ) : isMobile ? (
              <div style={s.mobileCards}>
                {filteredAndSortedBooks.map((book, i) => (
                  <div key={i} style={s.card}>
                    <img src={book.image} alt={book.title} style={s.cardCover} loading="lazy" />
                    <div style={s.cardContent}>
                      <a href={book.amazon_link} target="_blank" rel="noopener noreferrer" style={s.bookTitle}>
                        {book.title}
                      </a>
                      <div style={s.bookAuthor}>{book.author}</div>
                      <div>
                        <span style={s.stars}>{getStars(book.rating)}</span>
                        <span style={{ marginLeft: '0.5rem', color: '#555' }}>{book.rating}</span>
                      </div>
                      <div style={{ margin: '0.5rem 0' }}>
                        <span style={s.shelfTag}>{book.shelf}</span>
                      </div>
                      <div style={s.price}>{book.price}</div>
                      <a href={book.amazon_link} target="_blank" rel="noopener noreferrer" style={s.viewLink}>
                        View on Amazon →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <table style={s.table}>
                <thead>
                  <tr>
                    <th style={{ ...s.th, width: '90px' }}>Cover</th>
                    <th style={s.th}>Title</th>
                    <th style={s.th}>Author</th>
                    <th style={{ ...s.th, width: '140px' }}>Rating</th>
                    <th style={{ ...s.th, width: '110px' }}>Shelf</th>
                    <th style={{ ...s.th, width: '110px' }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAndSortedBooks.map((book, i) => (
                    <tr key={i}>
                      <td style={s.td}>
                        <img
                          src={book.image}
                          alt={book.title}
                          style={{ width: '64px', borderRadius: '6px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}
                          loading="lazy"
                        />
                      </td>
                      <td style={s.td}>
                        <a href={book.amazon_link} target="_blank" rel="noopener noreferrer" style={s.bookTitle}>
                          {book.title}
                        </a>
                      </td>
                      <td style={s.td}>{book.author}</td>
                      <td style={s.td}>
                        <span style={s.stars}>{getStars(book.rating)}</span>
                        <span style={{ marginLeft: '0.6rem', color: '#555' }}>{book.rating}</span>
                      </td>
                      <td style={s.td}>
                        <span style={s.shelfTag}>{book.shelf}</span>
                      </td>
                      <td style={s.td}>
                        <div style={s.price}>{book.price}</div>
                        <a href={book.amazon_link} target="_blank" rel="noopener noreferrer" style={s.viewLink}>
                          Amazon
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;