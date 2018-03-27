import React, {Component} from 'react';

class Book extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {book} = this.props;
        return (
            <div className="col-md-4 border">
                <h3>{book.title}</h3>
                <p className='book-author'>{book.author}</p>
                <p>{book.publisher}</p>
                <p>{book.price}</p>
            </div>
        );
    }
}

export default Book;
