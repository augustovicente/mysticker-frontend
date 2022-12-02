import { Col, Row } from "antd"
import Skeleton from "react-loading-skeleton"

export const AlbumSkeletons = () => {
    return (
        <>
            <Col xxl={6} xl={5} md={4} sm={5}>
                <Row className="sticker-row">
                    <Skeleton
                        height={192}
                        baseColor='#3C375B'
                        highlightColor='#6345EE'
                        borderRadius={4}
                        style={{ minWidth: "140px", height: "188px" }}
                    />
                </Row>
            </Col>
        </>
    )
}
