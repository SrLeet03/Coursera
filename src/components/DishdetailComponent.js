
// import React, { Component } from "react";
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   Breadcrumb,
//   BreadcrumbItem,
//   Button,
//   Label,
//   Modal,
//   ModalBody,
//   ModalHeader,
//   Row,
//   Col,
// } from "reactstrap";
// import { Link } from "react-router-dom";
// import { LocalForm, Control, Errors } from "react-redux-form";

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !val || val.length <= len;
// const minLength = (len) => (val) => val && val.length >= len;

// class CommentForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isModalOpen: false,
//     };

//     this.toggleModal = this.toggleModal.bind(this);
//     this.handleModal = this.handleModal.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   toggleModal() {
//     this.setState({
//       isModalOpen: !this.state.isModalOpen,
//     });
//   }

//   handleModal(event) {
//     this.toggleModal();
//     alert(
//       "Rating: " +
//         this.rating.value +
//         " Name: " +
//         this.name.value +
//         " Comment: " +
//         this.comment.value
//     );
//     event.preventDefault();
//   }

//   handleSubmit(values) {
//     console.log("Current State is: " + JSON.stringify(values));
//     alert("Current State is: " + JSON.stringify(values));
//   }

//   render() {
//     return (
//       <div>
//         <Button outline onClick={this.toggleModal}>
//           <span className="fa fa-pencil"></span> Submit Comment
//         </Button>

//         <Modal isOpen={this.state.isModalOpen} toggle={this.state.toggleModal}>
//           <ModalHeader toggle={this.toggleModal}>Submit Comments</ModalHeader>
//           <ModalBody>
//             <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
//               <Row className="form-group">
//                 <Label htmlFor="rating" md={12}>
//                   Rating
//                 </Label>
//                 <Col md={12}>
//                   <Control.select
//                     model=".rating"
//                     className="form-control"
//                     name="rating"
//                   >
//                     <option>1</option>
//                     <option>2</option>
//                     <option>3</option>
//                     <option>4</option>
//                     <option>5</option>
//                   </Control.select>
//                 </Col>
//               </Row>

//               <Row className="form-group">
//                 <Label htmlFor="name" md={12}>
//                   Your Name
//                 </Label>
//                 <Col md={12}>
//                   <Control.text
//                     model=".name"
//                     className="form-control"
//                     name="name"
//                     placeholder="Your Name"
//                     validators={{
//                       required,
//                       minLength: minLength(3),
//                       maxLength: maxLength(15),
//                     }}
//                   />
//                   <Errors
//                     className="text-danger"
//                     model=".name"
//                     show="touched"
//                     messages={{
//                       required: "Required ",
//                       minLength: "Must be greater than 2 characters ",
//                       maxLength: "Must be 15 characters or less ",
//                     }}
//                   />
//                 </Col>
//               </Row>

//               <Row className="form-group">
//                 <Label htmlFor="comment" md={12}>
//                   Comment
//                 </Label>
//                 <Col md={12}>
//                   <Control.textarea
//                     model=".comment"
//                     className="form-control"
//                     name="comment"
//                     rows="6"
//                   />
//                 </Col>
//               </Row>

//               <Row className="form-group">
//                 <Col md={12}>
//                   <Button type="submit" color="primary">
//                     Submit
//                   </Button>
//                 </Col>
//               </Row>
//             </LocalForm>
//           </ModalBody>
//         </Modal>
//       </div>
//     );
//   }
// }

// function RenderDish({ dish }) {
//   return (
//     <Card>
//       <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>

//       <CardBody>
//         <CardTitle>{dish.name}</CardTitle>
//         <CardText>{dish.description}</CardText>
//       </CardBody>
//     </Card>
//   );
// }

// function RenderComments({ comments }) {
//   let list1 = comments.map((comments) => {
//     return (
//       <li key={comments.DishId}>
//         <div>
//           <p>{comments.comment}</p>
//           <p>
//             -- {comments.author},
//             {new Intl.DateTimeFormat("en-US", {
//               year: "numeric",
//               month: "short",
//               day: "2-digit",
//             }).format(new Date(Date.parse(comments.date)))}
//           </p>
//         </div>
//       </li>
//     );
//   });

//   return (
//     <div>
//       <h4>Comments</h4>
//       <ul className="list-unstyled">{list1}</ul>
//       <CommentForm></CommentForm>
//     </div>
//   );
// }

// const DishDetail = (props) => {
//   if (props.dish != null) {
//     return (
//       <div className="container">
//         <div className="row">
//           <Breadcrumb>
//             <BreadcrumbItem>
//               <Link to="/menu">Menu</Link>
//             </BreadcrumbItem>

//             <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
//           </Breadcrumb>

//           <div className="col-12">
//             <h3>{props.dish.name}</h3>
//             <hr />
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-12 col-md-5 m-1">
//             <RenderDish dish={props.dish} />
//           </div>
//           <div className="col-12 col-md-5 m-1">
//             <RenderComments comments={props.comments} />
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return <div></div>;
//   }
// };

// export default DishDetail;
import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label   , Col, FormFeedback , Navbar} from 'reactstrap';
import { COMMENTS } from '../shared/comments';


    
 class CommentForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isModelOPen : false , 
             touched : {YourName : false}

        }
        this.toggleModal = this.toggleModal.bind(this) ;
       this.handleLogin = this.handleLogin.bind(this) ;
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
  }

validiate (YourName) {
const errors = {
   YourName : '',
  
} ;
if(this.state.touched.YourName && YourName.lenth<3){
   errors.YourName = "firstname should be grether then 3" ;
}
else if (this.state.touched.YourName && YourName.lenth>10){
   errors.YourName = "firstname should not be grether than 15" ;
}
 return errors ;
}
        render() {
            const errors = this.validiate(this.state.YourName) ;

            return (
                <div>
                        <Navbar>
                <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Submmit Comment</Button>
                                </NavItem>
                            </Nav>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submmit Comment</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                        <Col md={10}>
                                    <Input type="select" name="contactType"
                                            value={1}
                                            onChange={this.handleInputChange}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>

                                    </Input>
                                </Col>
                        </FormGroup>
                            <FormGroup>
                                <Label htmlFor="YourName">Your Name</Label>
                                <Col md={10} >
                                <Input type="text" id="YourName" name="YourName"
                                    innerRef={(input) => this.YourName = input} />
                                    <FormFeedback>{errors.YourName}</FormFeedback>

                                    </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="6"
                                        value={this.state.message}
                                        > onChange={this.handleInputChange}>
                                        </Input>
                                </Col>
                            </FormGroup>
                         
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                </div>
            )
        }
    }
    
    
class Dishdetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isModelOPen : false , 

        }
        this.toggleModal = this.toggleModal.bind(this) ;
    }
    renderComments(comments) {
        if (comments == null) {
            return (<div></div>) }
        const cmnts = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )})
        return (
            
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                
                </ul>
            </div>
        )
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
    render() {

        const dish = this.props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem = this.renderDish(dish)
        const commentItem = this.renderComments(dish.comments)
        return (
            <div className='row'>
                {dishItem}
                {commentItem}
              <CommentForm />
            </div>
        )
    }}

export default Dishdetail