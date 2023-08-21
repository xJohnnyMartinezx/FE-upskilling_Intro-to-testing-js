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
})

