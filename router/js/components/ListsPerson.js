const ListsPerson = {
  name: "ListsPerson",
  template: `
  <div>
    <ul>
      <li v-for="person in people">{{ person }}</li>
    </ul>
  </div>`,
  data: function(){
    return {
      people: ["Andy", "John", "Alex", "Jay"],
    }
  }
}
