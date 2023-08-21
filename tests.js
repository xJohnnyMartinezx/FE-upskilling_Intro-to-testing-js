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

