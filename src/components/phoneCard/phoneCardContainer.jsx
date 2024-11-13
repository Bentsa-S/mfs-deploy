import React from "react";
import { connect } from "react-redux";
import { PhoneAllCards } from "./phoneAllCards";

const mapStateToProps = (state) => {
    console.log(state);

    return {
        cards: state.phone.cards
    };
    
};

export const MapPhoneAllCards = connect(mapStateToProps)(PhoneAllCards);


