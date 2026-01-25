import { Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { type NavNode } from '../nav';

@Component({
  selector: 'nav[tree]',
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatTreeModule,
  ],
  template: `
    <!-- Nav Node -->
    <ng-template #navLink let-node>
      <!-- External Link -->
      @if (node.href) {
        <a class="nav-link link" [href]="node.href">
          {{ node.text }}
        </a>
      }

      <!-- Route -->
      @else if (node.path) {
        <a
          class="nav-link link"
          [routerLink]="relativeTo() + node.path"
          routerLinkActive="matched-path"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          {{ node.text }}
        </a>
      }

      <!-- Label -->
      @else {
        <span class="nav-link base-link">{{ node.text }}</span>
      }
    </ng-template>

    <!-- Nav Tree -->
    <mat-tree
      #tree
      class="nav-tree"
      [dataSource]="source()"
      [childrenAccessor]="childrenAccessor"
    >
      <!-- Leaf -->
      <mat-nested-tree-node *matTreeNodeDef="let node" class="nav-node">
        <ng-container
          *ngTemplateOutlet="navLink; context: { $implicit: node }"
        />
      </mat-nested-tree-node>

      <!-- Branch (Expandable) -->
      <mat-nested-tree-node
        *matTreeNodeDef="let node; when: hasChild"
        class="nav-node"
        [isExpandable]="hasChild"
        [isExpanded]="node.expanded ?? false"
        [class.expanded]="tree.isExpanded(node)"
      >
        <ng-container
          *ngTemplateOutlet="navLink; context: { $implicit: node }"
        />

        <button
          matTreeNodeToggle
          matIconButton
          class="nav-children-toggle"
          aria-label="toggle nav section"
        >
          <mat-icon
            class="icon"
            [class.expanded]="tree.isExpanded(node)"
            aria-hidden="true"
          >
            arrow_drop_down
          </mat-icon>
        </button>

        <div class="nav-children" [class.expanded]="tree.isExpanded(node)">
          <ng-container matTreeNodeOutlet></ng-container>
        </div>
      </mat-nested-tree-node>
    </mat-tree>
  `,
  styles: `
    .nav-tree {
      box-sizing: border-box;
      display: block;
      flex-grow: 1;
      margin: 0;
      padding: 0 0.5rem 0 0;
    }

    .nav-link {
      grid-area: link;
      place-self: center start;
      width: 100%;
      text-decoration: none;
    }

    .nav-node {
      box-sizing: border-box;
      width: 100%;
      padding: 0 0 0 0.5rem;
      margin: 0;
      display: grid;
      grid-template-areas:
        'link     toggle'
        'children children';
      grid-template-columns: 1fr 3rem;
      grid-template-rows: 3rem 0fr;
      gap: 0;
      transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
      &.expanded {
        grid-template-rows: 3rem 1fr;
      }
    }

    .nav-children-toggle {
      grid-area: toggle;
      box-sizing: border-box;
      place-self: center end;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);

        &.expanded {
          transform: rotate(180deg);
        }
      }
    }

    .nav-children {
      grid-area: children;
      overflow: hidden;
      visibility: hidden;
      transition: visibility 190ms linear;

      &.expanded {
        visibility: visible;
      }
    }
  `,
})
export class NavTreeComponent {
  readonly relativeTo = input<string>('/');

  readonly routes = input.required<NavNode[]>();

  readonly source = computed(() =>
    this.routes().filter((route) => !!route.path || !!route.href)
  );

  childrenAccessor = (node: NavNode) => node.children ?? [];

  hasChild = (_: number, node: NavNode) =>
    !!node.children && node.children.length > 0;
}
