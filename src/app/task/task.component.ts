
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'store-task',
  template: `
    <div class="list-item">
      <label [attr.aria-label]="task.title + ''" for="title">
        <input
          type="text"
          [value]="task.title"
          readonly="true"
          id="title"
          name="title"
        />
      </label>
    </div>
  `,
})
export class TaskComponent {
  @Input() task: any;

  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onPinTask = new EventEmitter<Event>();

  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  onArchiveTask = new EventEmitter<Event>();
}
