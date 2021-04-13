import React from "react";
import PropTypes from "prop-types";

// Constants
const PATH = "//source.Unsplash.com";
const USER = "user";
const COLLECTION = "collection";
const DAILY = "daily";
const RANDOM = "random";
const WIDTH = 1080;
const HEIGHT = 720;

// Helper to generate url for Unsplash
const generateUrl = ({
                         username,
                         width,
                         height,
                         photoId,
                         collectionId,
                         keywords,
                         fixed
                     }) => {
    const url = [PATH]

    if (fixed) return url.push(DAILY).join("/")

    if (username) url.push(USER, username)
    if (!username && collectionId) url.push(COLLECTION, collectionId)
    if (!username && !collectionId && photoId) url.push(photoId)
    if (!username && !photoId && !collectionId && !keywords) url.push(RANDOM)

    url.push(`${width}x${height}`)

    if (keywords) url.push(`?${keywords.replace(/\s/g, "")}`)

    return url.join("/")
}

export const Unsplash = function(props) {
    let {
        photoId,
        collectionId,
        username,
        fixed,
        keywords,
        style,
        width,
        height
    } = props;

    if (typeof width === "string") width = parseInt(width, 10)
    if (typeof height === "string") height = parseInt(height, 10)

    const urlWidth = (style && style.width) || width
    const urlHeight = (style && style.height) || height

    const url = encodeURI(
        generateUrl({
            username,
            collectionId,
            photoId,
            keywords,
            fixed,
            width: urlWidth,
            height: urlHeight
        })
    )

    return <>
        <img src={url} className={props.className} alt=""/>
    </>
};

Unsplash.propTypes = {
    children: PropTypes.node,
    collectionId: PropTypes.number,
    username: PropTypes.string,
    keywords: PropTypes.string,
    expand: PropTypes.bool,
    fixed: PropTypes.bool,
    img: PropTypes.bool,
    style: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Unsplash.defaultProps = {
    expand: false,
    fixed: false,
    img: false,
    width: WIDTH,
    height: HEIGHT
}

export default Unsplash
