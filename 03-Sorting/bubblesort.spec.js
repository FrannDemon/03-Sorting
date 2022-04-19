describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
      spyOn(window, "swap").and.callThrough()
      bubbleSort([])
      expect(swap.calls.count()).toEqual(0)
    });
    it('handles an disorder array', function(){
        expect( bubbleSort([3,1,2]) ).toEqual([1,2,3]);
        spyOn(window, "swap").and.callThrough()
        bubbleSort([3,1,2])
        expect(swap.calls.count()).toEqual(2)
    });
    it('handles an order array', function(){
        expect( bubbleSort([1,2,3]) ).toEqual([1,2,3]);
        spyOn(window, "swap").and.callThrough()
        bubbleSort([1,2,3])
        expect(swap.calls.count()).toEqual(0)
    });
    it('handles an inverse array', function(){
        expect( bubbleSort([3,2,1]) ).toEqual([1,2,3]);
        spyOn(window, "swap").and.callThrough()
        bubbleSort([3,2,1])
        expect(swap.calls.count()).toEqual(3)
    });
   
    
   
  });

 