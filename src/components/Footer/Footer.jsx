import { useTranslation } from "react-i18next";

import SocialsRow from "../SocialsRow/SocialsRow";

import './Footer.scss'

const Footer = ({ backgroundColor }) => {
    const { t } = useTranslation("footer")

    return (
        <div className={`footer ${backgroundColor ? backgroundColor : ''}`}>
            <div className="footer__column">
                <div>
                    <div className="footer__label">{t("text-contact")} Gerard</div>
                    <a className="footer__anchor--text" href="mailto:gerardxreyes@gmail.com">gerardxreyes@gmail.com</a>
                </div>
            </div>
            <div className="footer__column">
                <div className="footer__twitter-container">
                    <div className="footer__label">{t("text-follow")} Gerard</div>
                    <a className="footer__anchor--text" href="https://twitter.com/gerardxreyes">@gerardxreyes</a>
                </div>
                <SocialsRow />
            </div>
            <div className="footer__column">
                <div>
                    <div className="footer__label">{t("text-follow")} Public / Private Parts</div>
                    <a className="footer__anchor--text" href="https://www.instagram.com/public_private_parts/">@public_private_parts</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
