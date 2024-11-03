import React, { useEffect, useState } from 'react';
import Banner from '../../Banner/Banner';
import Cards from '../../Cards/Cards';

const Home = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('/public/Books.json')
            .then(res => res.json())
            .catch(data => setBooks(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <h1 className="lg:text-4xl text-3xl lg:mt-20 mt-8 font-bold text-[#131313] text-center">Books</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:mt-10 mt-4">


                {
                    books?.map(book => <Cards key={book.bookId} book={book}></Cards>)
                }

            </div>
        </div>
    );
};

export default Home;