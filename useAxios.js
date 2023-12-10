import { useEffect, useRef, useState } from "react";

export default function useAxios() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const effectRun = useRef(false);
    // Usei o useRef para manter o valor mesmo com a renderização e quando atualizar o valor não precisar renderizar. AbortController() serve para abortar a requisição.
    const controller = useRef(new AbortController());

    function fetchApi({ instance, method, url }) {
        // Aqui eu aborto a requisição.
        controller.current.abort();
        // Aqui eu acrio um novo objeto Abort... porque se eu não fizer isso quando eu apertar novamente no botão Pokemon, eu não vou conseguir fazer uma nova requisição.
        controller.current = new AbortController();
        const signal = controller.current.signal;
        // setTimeout para simular uma requisição mais demorada
        setLoading(true);
        setTimeout(async () => {
            try {
                const { data } = await instance[method.toLowerCase()](url, { signal })
                setData(data.results);
            } catch (error) {
                // Quando aborta a requisição vem uma mensagem no error.message 'canceled'.
                if (error.message === 'canceled') {
                    console.log(error.message);
                } else {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        }, url === 'ability' ? 1000 : 3000);
    }

    useEffect(() => {
        // Essa lógica é para não executar a função fetchApi quando o componente é montado pela primeira vez. Somente quando aperta os botões.
        if (effectRun.current) {
            fetchApi();
        } else {
            effectRun.current = false;
        }
    }, [])

    return [data, loading, error, fetchApi];
}