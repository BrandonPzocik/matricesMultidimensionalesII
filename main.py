personas = []

while True:
    print("\n--- MENÚ ---")
    print("1. Ingresar nueva persona")
    print("2. Mostrar todos los datos")
    print("3. Filtrar por DNI")
    print("4. Salir")
    
    opcion = input("Seleccione una opción: ")

    if opcion == "1":
        nombre = input("Nombre: ")
        apellido = input("Apellido: ")
        dni = input("DNI: ")
        telefonos = input("Teléfonos (separados por comas): ").split(",") #El método .split(",")dividirá la cadena en una lista
        tiene_hijos = input("¿Tiene hijos? (s/n): ").lower()
        if tiene_hijos == "s":
            hijos = input("Hijos (separados por comas): ").split(",")
        else:
            hijos = []

        personas.append([nombre, apellido, dni, telefonos, hijos])
        print("Persona agregada con éxito.")

    elif opcion == "2":
        if not personas:
            print("No hay datos ingresados.")
        else:
            print("\n--- Lista de Personas ---")
            for p in personas:
                print(f"Nombre: {p[0]} {p[1]}, DNI: {p[2]}, Teléfonos: {p[3]}, Hijos: {p[4]}")

    elif opcion == "3":
        dni_buscar = input("Ingrese el DNI a buscar: ")
        encontrado = False
        for p in personas:
            if p[2] == dni_buscar:
                print(f"Nombre: {p[0]} {p[1]}, DNI: {p[2]}, Teléfonos: {p[3]}, Hijos: {p[4]}")
                encontrado = True
                break
        if not encontrado:
            print("No se encontró ninguna persona con ese DNI.")

    elif opcion == "4":
        print("Saliendo del programa...")
        break

    else:
        print("Opción inválida. Intente de nuevo.")
