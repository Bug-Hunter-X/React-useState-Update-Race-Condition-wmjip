```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct approach: Functional update ensures state update is based on previous value
    setCount(prevCount => prevCount + 2); 
  }, []);

  return <div>Count: {count}</div>;
}
```