```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered:', count);
  }, [count]); // Only re-run if 'count' changes

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1); // This is the issue, this will be ignored
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```