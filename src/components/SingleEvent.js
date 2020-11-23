import React, { Component } from 'react';
import moment from 'moment';

class SingleEvent extends Component {

    render() {
        const { _id, name, description, date, time, img } = this.props;
        const formattedDate = moment(date).format('LL');

        return (
            <li className="" key={_id}>
                <div className="">
                    <figure className="">
                        <a href="/events/:id" className="js-lightbox-sidebar">
                            <div className="box-photo">
                                <img alt="event" src={img} className="lazy lazy-loaded img-container" style={{ width: 417, height: 298, backgroundImage: "url('./images/evento1.jpg'", backgroundSize: "cover" }} />
                            </div>
                        </a>
                    </figure>
                    <div className="">
                        <div className="">
                            <div className="">
                                <strong>{name}</strong>
                            </div>
                            <div className="">
                                <strong>{formattedDate}</strong>, at {time}
                            </div>
                            <div className="">
                                <h3>{description}</h3>
                            </div>
                            <div className="">in :
                                <strong>Organizer</strong>
                            </div>
                        </div>
                        <div className="footer">
                            <div className="box-left">
                                <div className="box-users-likes">
                                    <ul className="list-users">
                                        <li>
                                            <div className="item js-user" data-username="benoitbeghyn">
                                                <a href="/benoitbeghyn/">
                                                    <img src="" data-src="" width={27} height={27} alt="Benoit Beghyn" className="lazy lazy-loaded" />User joined</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="container-bt-circle">
                                        <div className="tooltip">
                                            <div className="bt-like">
                                                <svg viewBox="0 0 27 27" className="circle">
                                                    <path d="M13.513 26.5C6.326 26.5.5 20.68.5 13.5S6.326.5 13.513.5c7.023 0 12.73 5.564 12.987 12.52">
                                                    </path>
                                                </svg>
                                                <svg className="ico-svg" viewBox="0 0 12.833 14">
                                                    <use xlinkHref="">
                                                    </use>
                                                </svg>
                                                <div className="number">(15) Number of people joined</div>
                                            </div>
                                            <div className="box-tooltip">
                                                <div className="tooltip-text">People attending</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-right">
                                <a href="" className="button x-small border-gray rounded"> Join Now </a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

        )
    }
}



export default SingleEvent;