import { Card, CardContent } from "@/components/ui/card";

const Introduction = ({ categories }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-4 md:py-8">
      {/* Titles */}
      <div className="max-w-2xl">
        <h1 className="text-foreground text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Explore Chess Categories
        </h1>
        <p className="mt-6 text-muted-foreground text-lg md:text-xl">
          Dive into different categories to enhance your chess knowledge and strategy.
        </p>
      </div>

      {/* Categories List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl">
        {categories?.map((category) => (
          <Card key={category.slug} className="border border-border shadow-lg p-4">
            <CardContent className="flex flex-col items-center text-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-4">{category.name}</h2>
              <p className="text-muted-foreground text-sm mt-2">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Introduction;
