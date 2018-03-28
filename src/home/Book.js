import React, {Component} from 'react';

class Book extends Component{

    render(){
        const {book} = this.props;
        console.log(book);
        return (
            <div className="col-md-4 border">
                <img src={book.thumbnail} alt={book.title} className="img-thumbnail img-fluid"/>
                <h3>{book.title}</h3>
                <p className='book-author'>{book.author}</p>
                <p>{book.publisher}</p>
                <p>{book.price}</p>
            </div>
        );
    }
}

export default Book;
