// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// ****** EXERCISE 1. ************
describe("sayHello", function(){
    it("should be a defined function", function (){
        expect(typeof sayHello).toBe("function");
       });
    // ****** EXERCISE 2. ************
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    // ****** EXERCISE 3. ************
    it('should return the string "Hello, Jane!" when executed', function (){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    // ****** EXERCISE 4. ************
    it('should return the string "Hello, Alex!" when executed', function (){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    // ****** EXERCISE 5. ************
    it('should return the string "Hello, Pat!" when executed', function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    // ****** EXERCISE 8. ************
    it('should return the string "Hello, World!" when executed', function (){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with true boolean arg.', function (){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with false boolean arg.', function (){
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

// ****** EXERCISE 10. ************
describe("isFive", function() {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean when executed', function (){
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when input is 5', function (){
        expect(isFive(5)).toBe(true);
    });
    it('should return true when input is 5 of type String', function (){
        expect(isFive("5")).toBe(true);
    });
});


// ****** EXERCISES 11. ************
describe("isEven", function() {
    it("should be a defined function", function () {
        expect(typeof isEven).toBe("function");
    });
    it('should return a boolean when executed', function (){
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when input is 2', function (){
        expect(isEven(2)).toBe(true);
    });
    it('should return true when input is -4', function (){
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when input is 3', function (){
        expect(isEven(3)).toBe(false);
    });
    it('should return false when input is banana', function (){
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when input is 8', function (){
        expect(isEven(8)).toBe(true);
    });
    it('should return false when input is Infinity', function (){
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when input is a boolean', function (){
        expect(isEven(false) || isEven(true)).toBe(false);
    });
    it('should return false when missing input arg', function (){
        expect(isEven()).toBe(false);
    });
});

// ****** EXERCISES 12. ************
describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isVowel()).toBe( 'boolean');
    });
    it('should return true when passed "a"', function() {
        expect(isVowel('a')).toBe( true);
    });
    it('should return true when passed "A"', function() {
        expect(isVowel('A')).toBe( true);
    });
    it('should return false when passed "y"', function() {
        expect(isVowel('y')).toBe( false);
    });
    it('should return false when passed 4', function() {
        expect(isVowel(4)).toBe( false);
    });
    it('should return false when passed a boolean input', function () {
        expect(isVowel(false) || isEven(true)).toBe(false);
    });
    it('should return false when passed "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isVowel()).toBe(false);
    });
});

// ****** EXERCISES 13. ************
describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when called with (2, 3)', function() {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when called with (-3, -9)', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when called with ("6", 5)', function() {
        expect(add("6", 5)).toBe(11);
    });
    it('should return NaN when called with ("banana", "split")', function() {
        expect(add("banana", "split")).toBeNaN();
    });
    it('should return NaN when called with (2, "apples")', function() {
        expect(add(2, "apples")).toBeNaN();
    });
    it('should return NaN when called without an argument', function () {
        expect(add()).toBeNaN();
    });
});
