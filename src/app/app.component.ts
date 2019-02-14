import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Angular 7.2.0</h1>
        <h2>Works with object</h2>
        <pre>{{ user | json }}</pre>
        <app-user [user]="user"></app-user>
        <app-user2 [(name)]="user.name" [age]="user.age"></app-user2>

        <!--<hr/>-->
        <!--<h2>Works with primitives</h2>-->
        <!--<pre>{{ name | json }}</pre>-->
        <!--<pre>{{ age | json }}</pre>-->
        <!--&lt;!&ndash;<app-user [user]="{name: name, age: age}"></app-user>&ndash;&gt;-->
        <!--&lt;!&ndash;<app-user2 [name]="name" [age]="age"></app-user2>&ndash;&gt;-->
    `,
    styles: []
})
export class AppComponent {
    user = {
        name: 'Georgy',
        age: 30
    };

    name = 'Iliya';
    age = 14;

    // Bonus
    // ngDoCheck() {
    //     console.log(+new Date(), `change detector was running`);
    // }
}

@Component({
    selector: 'app-user',
    template: `
        <input type="text" [(ngModel)]="user.name"/>
        <input type="number" [(ngModel)]="user.age"/>
        <pre>{{ user | json }}</pre>
    `,
    styles: []
})
export class UserComponent {
    @Input() user;
}

@Component({
    selector: 'app-user2',
    template: `
        <input type="text" [(ngModel)]="name" (input)="nameChange.emit($event.target.value)"/>
        <input type="number" [(ngModel)]="age"/>
        <pre>{{ name | json }}</pre>
        <pre>{{ age | json }}</pre>
    `,
    styles: []
})
export class User2Component {
    @Input() name;
    @Input() age;
    @Output() nameChange = new EventEmitter();

}
