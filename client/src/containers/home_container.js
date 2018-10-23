import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions';

import BookItem from '../widgetsUI/book_item';


class HomeContainer extends Component {

    componentWillMount(){
        this.props.dispatch(getBooks(1,0,'asc'));
    }

    renderItem = (books) => (
        books.list ?
            books.list.map( item => (
                <BookItem {...item} key={item._id}/>
            ))
        :null
    )
    
    loadmore = () => {
        let count =  this.props.books.list.length;
        this.props.dispatch(getBooks(1,count,'desc',this.props.books.list));
    }

    render() {
        return (
            <div>
                {this.renderItem(this.props.books)}
                <div className="loadmore" onClick={this.loadmore} 
                >Load More</div>
            </div>
        );
    }
}

function mapStateToPros(state){
    return {
        books: state.books
    }
}

export default connect(mapStateToPros)(HomeContainer);