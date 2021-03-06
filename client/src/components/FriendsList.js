import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const FilmList = (props) => {
    console.log(props)

    return (
        <div className="friendslist-container">
            {props.films.map(e => {
                return (
                    <Card key={e._id}>
                        <CardImg top width="100%" src={`https://robohash.org/${e.title}?size=318x180`} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{e.title}</CardTitle>
                            <CardText>Episode: {e.episode}</CardText>
                            <CardText>Release: {e.release_date}</CardText>
                            <CardText>Directors: {e.director}</CardText>
                            <CardText>Producers: {e.producer}</CardText>
                            {/* <CardText>{ghUser && ghUser}</CardText>
                            <CardText>{facebookUser && facebookUser}</CardText> */}
                            <button type="button" onClick={() => props.destroy(e._id)}>DELETE</button>
                        </CardBody>
                    </Card>
                );
            })}
        </div>
    )
}

export default FilmList