import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component{

    constructor(props){
        super(props);
        this.state = {
            books: {}
        }
        ;
    }

    componentDidMount(){
        fetch('http://localhost:3001/books')
            .then(res => res.json())
            .then(result => this.setState({books: result}));
    }

    render(){
        const {books} = this.state;
        if ( Object.keys(books).length === 0 && books.constructor === Object){
            return (
                <section>
                    Loading ...
                </section>
            );
        }else{
            return (
                <section className="container">
                    <div className="row" >
                        {books.map(book => (<Book key={book.id} book={book} />))}
                    </div>
                </section>
            );

        }
    }
}

export default BookList;
