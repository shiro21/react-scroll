import { useEffect, useState } from "react";
import "../styles/scroll.scss";
import Card from "../components/scroll/card";
import { DataProps } from "../interface/scroll";
import { useInView } from "react-intersection-observer";

const Scroll = () => {

    // scroll
    const [ref, inView] = useInView();

    // JSON DATA ( FAKE DATA)
    const [data, setData] = useState<DataProps[]>([]);
    console.log(data[0]);

    const productFetch = () => {
        fetch(`https://jsonplaceholder.typicode.com/albums`)
        .then(response => response.json())
        .then((json: DataProps[]) => {
            setData([...data, ...json])
        })
    }

    useEffect(() => {
        if (inView) productFetch();
        // data 종속성 누락으로 인해 추가한 내용입니다.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView])

    return (
        <section>
            {/* 카드 */}
            <ul>
                {
                    data.length > 0 && data.map((item, index) => (
                        <li key={index}>
                            <Card item={item} />
                        </li>
                    ))
                }
                {/* Render부분에 닿으면 inView가 true가 되면서 새로운 데이터를 불러옵니다. */}
                <li ref={ref}>Render</li>
            </ul>
        </section>
    );
}

export default Scroll;