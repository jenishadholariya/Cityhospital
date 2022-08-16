import React from 'react';
import { Card , CardBody , CardTitle , CardSubtitle , CardText , Button } from 'reactstrap'

function List({Data,getProps}) {
    return (
        Data.map((o,i) => {
            return (
                <Card key={i}
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            {o.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {o.price}
                        </CardSubtitle>
                        <CardText>
                            {o.expiry}
                        </CardText>
                        <Button onClick={() =>getProps(o.id)}>
                            Button
                        </Button>
                    </CardBody>
                </Card>
            )
        })
    );
}

export default List;