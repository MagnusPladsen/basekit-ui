import { withThemeByClassName } from "@storybook/addon-themes";
import type { Meta, StoryObj } from "@storybook/react";
import Calendar from "../components/Calendar/Calendar.component";
import "../index.css";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {   
    onSelect: {
      action: "Set selected date",
      table: {
        category: "Events",
        type: {
          summary: "function",
        },
      },
    }, 
    showOutsideDays: {
      description: "Show days outside the current month",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      description: "Disable the calendar",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    defaultMonth: {
      description: "Set the default month",
      table: {
        type: {
          summary: "Date",
        },
      },
    },
    footer: {
      description: "Footer content",
      table: {
        type: {
          summary: "React.ReactNode",
        },
      },
    },
    locale: {
      description: "Set the locale",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    lang: {
      description: "Set the language",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    max: {
        description: "The maximum amount of days that can be selected",
        table: {
          type: {
            summary: "number",
          },
        },
    },
    min: {
        description: "The minimum amount of days that can be selected",
        table: {
          type: {
            summary: "number",
          },
        },
    },
    numberOfMonths: {
        description: "The number of months to display",
        table: {
          type: {
            summary: "number",
          },
        },
    },
    showWeekNumber: {
        description: "Show the week number",
        table: {
          type: {
            summary: "boolean",
          },
        },
    },
    fromDate: {
        description: "The start date",
        table: {
          type: {
            summary: "Date",
          },
        },
    },
    fromMonth: {
        description: "The start month",
        table: {
          type: {
            summary: "Date",
          },
        },
    },
    fromYear: {
        description: "The start year",
        table: {
          type: {
            summary: "Date",
          },
        },
    },
  },
  args: {
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const DefaultCalendar: Story = {
  args: {
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];
