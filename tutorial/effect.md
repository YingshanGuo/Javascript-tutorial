# Effect
#### 单选、复选

```
<form action="">
  <div>
    <label for=""><input type="checkbox" name="checkboxgroup" value="A">A</label>
    <label for=""><input type="checkbox" name="checkboxgroup" value="B">B</label>
    <label for=""><input type="checkbox" name="checkboxgroup" value="C">C</label>
  </div>
  <div>
    <label for=""><input type="radio" name="radiogroup" value="a">a</label>
    <label for=""><input type="radio" name="radiogroup" value="b">b</label>
    <label for=""><input type="radio" name="radiogroup" value="c">c</label>
  </div>
</form>
```

```
$("input[name='radiogroup']").eq(1).prop('checked', 'checked');
// $("input[name='radiogroup']").eq(0).removeProp('checked');
$("input").click(function(){
  console.log($(this).val());
});
```

####
