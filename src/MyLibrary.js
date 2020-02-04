import React, { Component } from 'react'

class MyLibrary extends Component{
    constructor(){
        super();
        this.state={
            books:[],
            title:'',
            author:''
        }
    }

    onChange=(e)=>{
        var fieldValue=(e.target.type=="checkbox")? e.target.checked:e.target.value;
        var fieldName=e.target.name;

        this.setState({
            [fieldName]:fieldValue
        })
    }

    addBook=(e)=>{
        e.preventDefault();

        var book={
            id:this.state.books.length+1,
            title:this.state.title,
            author:this.state.author
        }

        this.setState({
            books:[...this.state.books,book],
            title:'',
            author:''
        })
    }

    removeBook=(id)=>{
        this.setState({
            books:this.state.books.filter((book)=>{
                return book.id!=id;
            })
        })
    }

    render(){
        return(
            <div>
                <h1>My Library</h1>
                <input type="text" value={this.state.title} onChange={this.onChange} name="title"/>
                <input type="text" value={this.state.author} onChange={this.onChange} name="author"/>
                <button onClick={this.addBook}>Add Book</button>
                <table>
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th></th>
                    </tr>
                    {
                        this.state.books.map((book)=>{
                            return <tr key={book.id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td><button onClick={()=>this.removeBook(book.id)}>X</button></td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MyLibrary;