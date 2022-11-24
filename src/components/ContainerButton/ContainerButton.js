import React from "react";
import styles from './containerButton.module.css';

import LabelOrTextCTC from "../LabelOrTextCTC/LabelOrTextCTC";
import ButtonFilled from "../ButtonFiled/ButtonFilled"
import ButtonEmpty from "../ButtonEmpty/ButtonEmpty";
import LinkLabel from "../LinkLabel/LinkLabel";


export default function ContainerButton(props) {
    return (
        <div {...props} className={styles.containerButton}>

            <LabelOrTextCTC names="BUTTONS" />
            <div>
                <ButtonFilled names="CLICK ME" />
                <ButtonFilled names="CLICK ME" />

                <ButtonEmpty names="CLICK ME" />
                <ButtonEmpty names="CLICK ME" />
            </div>
            <LinkLabel names="CLICK ME" />
            <LinkLabel names="CLICK ME" />

        </div>
    );
};