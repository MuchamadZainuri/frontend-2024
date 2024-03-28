const Card = (props) => {
    // eslint-disable-next-line react/prop-types
    const { title, body, image } = props;

    return (
            <li className="card">
                <div className="card-image">
                    <img src={image} width="100%" alt="movie-poster" />
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="card-body">
                        <p>{body}</p>
                    </div>
                </div>
            </li>
    );
}

export default Card;