```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic to update count based on previous state
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); // This will likely not work as expected
  }, []);

  return <div>Count: {count}</div>;
}
```