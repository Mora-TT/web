import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Mora", "TT", "Smashes"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {clearInterval(tick)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2) 
        }

        if (!isDeleting && updatedText == fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText == '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-center">
                    <Col>
                        <span className="tagline">Welcome Players!</span>
                        <h1>{'Hi, We are Mora TT'}<span className="wrap">{text}</span></h1>
                        <p>adljaklskldsklasdnlkasnklasdnklsdkl</p>

                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size = {25}></ArrowRightCircle></button>

                        <Col xs={12} md={6} xl={5}>
                            <img src=""></img>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}